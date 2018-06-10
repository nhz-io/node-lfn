'use strict'

const {$, $$} = require('../lfn')
const {$$keys} = require('./keys')

const $$toPairs = o => $$keys(o).map(k => ({[k]: o[k]}))

const $toPairs = $($$toPairs)

const toPairs = $$($$toPairs)

module.exports = {
  $$toPairs,
  $toPairs,
  toPairs,
}
