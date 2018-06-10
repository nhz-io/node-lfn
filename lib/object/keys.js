'use strict'

const {$, $$} = require('../lfn')

const $$keys = o => Object.keys(o || {})

const $keys = $($$keys)

const keys = $$($$keys)

module.exports = {
  $$keys,
  $keys,
  keys,
}
