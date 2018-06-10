const lfn = require('./lfn')
const fn = require('./fn')
const object = require('./object/index')
const collection = require('./collection/index')
const json = require('./json/index')
const string = require('./string/index')

module.exports = {
  ...lfn,
  ...fn,
  ...object,
  ...collection,
  ...json,
  ...string,
}
