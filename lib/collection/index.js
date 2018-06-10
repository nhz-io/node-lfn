const append = require('./append')
const prepend = require('./prepend')
const map = require('./map')

module.exports = {
  ...append,
  ...prepend,
  ...map,
}
