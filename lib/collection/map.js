'use strict'

const {$, $$} = require('../lfn')

const $$map = fn => xs => (xs || []).map(fn)

const $map = fn => $(xs => (xs || []).map(fn))

const map = fn => $$(xs => (xs || []).map(fn))

module.exports = {
  $$map,
  $map,
  map,
}
