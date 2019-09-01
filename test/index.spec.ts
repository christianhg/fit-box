import { createBoxGenerator } from 'box-generator';
import { fitBox } from '../src';
import { aspectRatio } from '../src/util';
import { contains } from './contains';
import { equalFloats } from './equal-floats';
import { randomNumber } from './random-number';

describe(fitBox.name, () => {
  it('works', () => {
    const boxes = createBoxGenerator({
      initial: {
        width: randomNumber({ from: 1, to: 1000 }),
        height: randomNumber({ from: 1, to: 1000 }),
      },
    });

    for (let box of boxes) {
      const boundaries = createBoxGenerator({ initial: box });

      for (let boundary of boundaries) {
        const fittedBox = fitBox({ boundary, box });

        expect(
          equalFloats(aspectRatio(fittedBox), aspectRatio(box))
        ).toBeTruthy();

        expect(contains({ boundary, box: fittedBox })).toBeTruthy();
      }
    }
  });
});
