# Fit Box

> Fits a box within a boundary while keeping its original aspect ratio.

```js
fitBox({
  boundary: { width: 400, height: 300 },
  box: { width: 1280, height: 760 },
});
// => { width: 400, height: 237.5 }
```
