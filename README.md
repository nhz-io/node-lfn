# lfn

> Lazy Functional Wrapper

## Install

```bash
npm i -S lfn
```

## Usage

```javascript
const $ = require('lfn')

const $ = require('.')

const sum = $((...args) => args.reduce((a, x) => a + x, 0))
const log = $(console.log.bind(console))

const one = $(1) // () => 1
const two = $(2) // () => 2

const sumOneTwo = sum(one, two)
const logSumOneTwo = log(sumOneTwo)

logSumOneTwo() // 3
```

# MIT
