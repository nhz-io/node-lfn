'use strict'

const {$, $$} = require('../lfn')
const {$$keys} = require('./keys')

const $$pick = ks => o => $$keys(o).filter(k => ks.includes(k)).reduce((a, k) => Object.assign(a, {[k]: o[k]}), {})

const $pick = ks => $(o => $$pick($((...ks) => ks)(...$(ks)()))(o))

const pick = ks => $$(o => $$pick($((...ks) => ks)(...$(ks)()))(o))

module.exports = {
  $$pick,
  $pick,
  pick,
}
