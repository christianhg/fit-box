import { Box } from './';

export function isSquare(box: Box): boolean {
  return box.width === box.height;
}

export function isLandscape(box: Box): boolean {
  return box.width > box.height;
}

export function isPortrait(box: Box): boolean {
  return box.width < box.height;
}

export function aspectRatio(box: Box): number {
  return box.width / box.height;
}
