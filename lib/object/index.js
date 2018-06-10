const fromPairs = require('./from-pairs')
const toPairs = require('./to-pairs')
const keys = require('./keys')
const omit = require('./omit')
const pick = require('./pick')
const prop = require('./prop')

module.exports = {
  ...fromPairs,
  ...toPairs,
  ...keys,
  ...omit,
  ...pick,
  ...prop,
}
