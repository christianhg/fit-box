# Fit Box

> Fits a box within a boundary while keeping its original aspect ratio.

[![npm module](https://badge.fury.io/js/fit-box.svg)](https://www.npmjs.org/package/fit-box)

The box will either be scaled up or scaled down within the boundary:

```js
fitBox({
  boundary: { width: 400, height: 300 },
  box: { width: 20, height: 60 },
});
// => { width: 100, height: 300 }

fitBox({
  boundary: { width: 400, height: 300 },
  box: { width: 1280, height: 760 },
});
// => { width: 400, height: 237.5 }
```
