'use strict'

const {$, $$} = require('../lfn')
const {$$keys} = require('./keys')

const $$omit = ks => o => $$keys(o).filter(k => !ks.includes(k)).reduce((a, k) => Object.assign(a, {[k]: o[k]}), {})

const $omit = ks => $(o => $$omit($(ks)())(o))

const omit = ks => $$(o => $$omit($(ks)())(o))

module.exports = {
  $$omit,
  $omit,
  omit,
}
