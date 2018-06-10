'use strict'

const {$, $$} = require('../lfn')

const $$append = x => xs => [...xs, x]

const $append = x => $(xs => $$append($(x)())(xs))

const append = x => $$(xs => $$append($(x)())(xs))

module.exports = {
  $$append,
  $append,
  append,
}
