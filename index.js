'use strict'

const TOK = '_'
const FUNCTION = 'function'

module.exports = function $ (x) {
  if (typeof x === FUNCTION) {
    if (x[TOK]) {
      return x
    }
    
    return Object.assign(
      function (...args) {
        if (args.length === 0) {
          return x()
        }
        
        return Object.assign(
          function () {
            return x(...args.map(a => $(a)()))
          },
          {[TOK]: x}
        )
      },
      {[TOK]: x}
    )
  }
  
  return Object.assign(
    function () {
      return x
    },
    {[TOK]: x}
  )
}
