# lfn

> Lazy Functional Wrapper

## Install

```bash
npm i -S lfn
```

## Usage

```javascript
// Import $ - normal invoker, $$ - lazy invoker
const {$, $$} = require('lfn')

// Summator
const sum = (...args) => args.reduce((a, x) => a + x, 0)

// Invoker
const $sum = $(sum)

// Lazy Invoker
const $$sum = $$(sum)

// Constant invoker for `1`
const one = $(1)

// Constant invoker for `2`
const two = $(2)

// Print 3 3 3
console.log($sum(1, 2), $sum(one, two), $sum(1, two))  

// 1 + 2 lazy invoker
const sum12 = $$sum(1, 2)

// one + two lazy invoker
const sumOneTwo = $$sum(one, two)

// 1 + two lazy invoker
const sum1Two = $$sum(1, two)

// Print 3 3 3
console.log(sum12(), sumOneTwo(), sum1Two())
```

# MIT
