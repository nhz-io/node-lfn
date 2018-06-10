const {$, $$} = require('../lfn')
const {$args} = require('../fn')

const $$stringify = (...args) => o => JSON.stringify(o, ...args)
const $stringify = (...args) => $(o => JSON.stringify(o, ...$args(...args)))
const stringify = (...args) => $$(o => JSON.stringify(o, ...$args(...args)))

module.exports = {
  $$stringify,
  $stringify,
  stringify,
}
