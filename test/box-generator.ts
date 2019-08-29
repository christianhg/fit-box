import { Box } from '../src';
import { randomNumber } from './random-number';

export function* createBoxGenerator({ length }: { length: number }) {
  yield createBoxWithWidth({ shape: 'landscape', width: length });
  yield createBoxWithWidth({ shape: 'portrait', width: length });
  yield createBoxWithWidth({ shape: 'square', width: length });
  yield createBoxWithHeight({ shape: 'square', height: length });
  yield createBoxWithHeight({ shape: 'portrait', height: length });
  yield createBoxWithHeight({ shape: 'landscape', height: length });
}

export type Shape = 'square' | 'landscape' | 'portrait';

function createBoxWithWidth({
  shape,
  width,
}: {
  shape: Shape;
  width: number;
}): Box {
  return {
    width,
    height:
      shape === 'square'
        ? width
        : shape === 'landscape'
        ? randomNumber({ from: 1, to: width - 1 })
        : randomNumber({ from: width + 1, to: width * 5 }),
  };
}

function createBoxWithHeight({
  shape,
  height,
}: {
  shape: Shape;
  height: number;
}): Box {
  return {
    width:
      shape === 'square'
        ? height
        : shape === 'landscape'
        ? randomNumber({ from: height + 1, to: height * 5 })
        : randomNumber({ from: 1, to: height - 1 }),
    height,
  };
}
