'use strict'

const {$, $$} = require('../lfn')

const $$prepend = x => xs => [x, ...xs]

const $prepend = x => $(xs => $$prepend($(x)())(xs))

const prepend = x => $$(xs => $$prepend($(x)())(xs))

module.exports = {
  $$prepend,
  $prepend,
  prepend,
}
