import { Box } from '../src';

export function contains({
  boundary,
  box,
}: {
  boundary: Box;
  box: Box;
}): boolean {
  return (
    (box.width === boundary.width && box.height <= boundary.height) ||
    (box.height === boundary.height && box.width <= boundary.width)
  );
}
