'use strict'

const {$, $$} = require('../lfn')

const $$prop = n => o => o ? o[n] : undefined

const $prop = n => $(o => $$prop($(n)())(o))

const prop = n => $$(o => prop($(n)())(o))

module.exports = {
  $$prop,
  $prop,
  prop,
}
