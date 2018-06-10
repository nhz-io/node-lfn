'use strict'

const {$, $$} = require('../lfn')

const $$fromPairs = ps => (ps || []).reduce((a, p) => Object.assign(a, p), {})

const $fromPairs = $($$fromPairs)

const fromPairs = $$($$fromPairs)

module.exports = {
  $$fromPairs,
  $fromPairs,
  fromPairs,
}
