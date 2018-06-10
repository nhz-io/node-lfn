'use strict'

const {$, $$} = require('../lfn')

const $$concat = (...args) => args.reduce((a, x) => a + x, '')

const $concat = $($$concat)

const concat = $$($$concat)

module.exports = {
  $$concat,
  $concat,
  concat,
}
