
# is-definitely-array

Helper function for determining if an object is an array when absolute certainty is necessary. Certainty is achieved through consensus - five people can't all be wrong.

[![build status](https://circleci.com/gh/yjhuoh/is-definitely-array.svg?style=shield&circle-token=20c50a7ba47b93c59613182b86365cafd249bc73)](https://circleci.com/gh/yjhuoh/is-definitely-array)
[![downloads](https://img.shields.io/npm/dm/is-definitely-array.svg)](https://www.npmjs.org/package/is-definitely-array)


## Installation
```bash
$ npm install is-definitely-array
```

Then bundle for the browser with
[browserify](https://github.com/substack/browserify).

## Usage

```js
var isDefinitelyArray = require('is-definitely-array');

console.log(isDefinitelyArray({})); // => false
console.log(isDefinitelyArray([])); // => true
```


## License

(MIT)

Copyright (c) 2016 Yu-Jay Huoh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
