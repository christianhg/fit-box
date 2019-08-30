# Fit Box

> Fits a box within a boundary while keeping its original aspect ratio.

[![npm module](https://badge.fury.io/js/fit-box.svg)](https://www.npmjs.org/package/fit-box)
[![Coverage Status](https://coveralls.io/repos/github/christianhg/fit-box/badge.svg?branch=master)](https://coveralls.io/github/christianhg/fit-box?branch=master)
[![Build Status](https://travis-ci.org/christianhg/fit-box.svg?branch=master)](https://travis-ci.org/christianhg/fit-box)
[![Dependencies](https://david-dm.org/christianhg/fit-box.svg)](https://david-dm.org/christianhg/fit-box)
[![devDependencies Status](https://david-dm.org/christianhg/fit-box/dev-status.svg)](https://david-dm.org/christianhg/fit-box?type=dev)

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
