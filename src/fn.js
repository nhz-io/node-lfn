import {$, $$} from './lfn'

export const $$pipe = (...fns) => (...args) => fns.reduce((args, fn) => [fn(...args)], args)[0]

export const $pipe = (...fns) => {
  fns = fns.map($)
  return $((...args) => fns.reduce((args, fn) => [fn(...args)], args)[0])
}

export const pipe = (...fns) => {
  fns = fns.map($)
  return $$((...args) => fns.reduce((args, fn) => [fn(...args)], args)[0])
}

export const $$args = (...args) => args
export const $args = $($$args)
export const args = $$($$args)

export const $$ap = fn => args => fn.apply(null,  args)
export const $ap = fn => $(args => fn.apply(null,  args))
export const ap = fn => $$(args => fn.apply(null,  args))

export const $$apply = args => fn => fn.apply(null,  args)
export const $apply = args => fn => fn.apply(null,  $args(...args))
export const apply = args => fn => () => fn.apply(null,  $args(...args))

export const $$call = (...args) => fn => fn.apply(null,  args)
export const $call = (...args) => fn => fn.apply(null,  $args(...args))
export const call = (...args) => fn => () => fn.apply(null,  $args(...args))
