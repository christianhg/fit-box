import { aspectRatio, isLandscape, isPortrait, isSquare } from './util';

export type Box = {
  width: number;
  height: number;
};

export function fitBox({ boundary, box }: { boundary: Box; box: Box }): Box {
  if (isLandscape(boundary) && isLandscape(box)) {
    return aspectRatio(box) > aspectRatio(boundary)
      ? {
          width: boundary.width,
          height: (boundary.width / box.width) * box.height,
        }
      : {
          width: (boundary.height / box.height) * box.width,
          height: boundary.height,
        };
  }

  if (isPortrait(boundary) && isPortrait(box)) {
    return aspectRatio(box) > aspectRatio(boundary)
      ? {
          width: boundary.width,
          height: (boundary.width / box.width) * box.height,
        }
      : {
          width: (boundary.height / box.height) * box.width,
          height: boundary.height,
        };
  }

  if (isPortrait(boundary) && isLandscape(box)) {
    return {
      width: boundary.width,
      height: (boundary.width / box.width) * box.height,
    };
  }

  if (isSquare(boundary) && isLandscape(box)) {
    return {
      width: boundary.width,
      height: (boundary.width / box.width) * box.height,
    };
  }

  if (isLandscape(boundary) && isPortrait(box)) {
    return {
      height: boundary.height,
      width: (boundary.height / box.height) * box.width,
    };
  }

  if (isSquare(boundary) && isPortrait(box)) {
    return {
      width: (boundary.height / box.height) * box.width,
      height: boundary.height,
    };
  }

  if (isLandscape(boundary) && isSquare(box)) {
    return {
      width: (boundary.height / box.height) * box.width,
      height: boundary.height,
    };
  }

  if (isPortrait(boundary) && isSquare(box)) {
    return {
      width: boundary.width,
      height: (boundary.width / box.width) * box.height,
    };
  }

  // Both are square
  return boundary;
}
