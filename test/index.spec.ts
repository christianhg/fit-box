import { fitBox } from '../src';
import { aspectRatio } from '../src/util';
import { createBoxGenerator } from './box-generator';
import { contains } from './contains';
import { randomNumber } from './random-number';

describe(fitBox.name, () => {
  it('works', () => {
    const boxes = createBoxGenerator({
      length: randomNumber({ from: 1, to: 1000 }),
    });

    for (let box of boxes) {
      const boundaries = [
        ...createBoxGenerator({
          length: randomNumber({ from: box.width + 1, to: box.width * 5 }),
        }),
        ...createBoxGenerator({
          length: randomNumber({ from: box.height + 1, to: box.height * 5 }),
        }),
        ...createBoxGenerator({
          length: randomNumber({ from: 1, to: box.width - 1 }),
        }),
        ...createBoxGenerator({
          length: randomNumber({ from: 1, to: box.height - 1 }),
        }),
        ...createBoxGenerator({ length: box.width }),
        ...createBoxGenerator({ length: box.height }),
      ];

      for (let boundary of boundaries) {
        const fittedBox = fitBox({ boundary, box });

        expect(aspectRatio(fittedBox).toFixed(2)).toBe(
          aspectRatio(box).toFixed(2)
        );

        expect(contains({ boundary, box: fittedBox })).toBeTruthy();
      }
    }
  });
});
