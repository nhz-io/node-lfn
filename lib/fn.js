const {$, $$} = require('./lfn')

const $$pipe = (...fns) => (...args) => fns.reduce((args, fn) => [fn(...args)], args)[0]

const $pipe = (...fns) => {
  fns = fns.map($)
  return $((...args) => fns.reduce((args, fn) => [fn(...args)], args)[0])
}

const pipe = (...fns) => {
  fns = fns.map($)
  return $$((...args) => fns.reduce((args, fn) => [fn(...args)], args)[0])
}

const $$args = (...args) => args
const $args = $($$args)
const args = $$($$args)

const $$ap = fn => args => fn.apply(this, args)
const $ap = fn => $(args => fn.apply(this, args))
const ap = fn => $$(args => fn.apply(this, args))

const $$apply = args => fn => fn.apply(this, args)
const $apply = args => fn => fn.apply(this, $args(...args))
const apply = args => fn => () => fn.apply(this, $args(...args))

const $$call = (...args) => fn => fn.apply(this, args)
const $call = (...args) => fn => fn.apply(this, $args(...args))
const call = (...args) => fn => () => fn.apply(this, $args(...args))

module.exports = {
  $$pipe,
  $pipe,
  pipe,

  $$args,
  $args,
  args,

  $$ap,
  $ap,
  ap,

  $$apply,
  $apply,
  apply,

  $$call,
  $call,
  call,
}
