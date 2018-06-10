export function $ (target) {
  if (typeof target === 'function') {
    if (target.invoker) {
      return target
    }

    function invoker (...args) {
      return invoker.real.apply(null,  args.map(arg => $(arg)()))
    }

    invoker.real = target
    invoker.invoker = invoker

    return invoker
  }

  function value () {
    return value.real
  }

  value.real = target
  value.invoker = value

  return value
}

export function $$ (target) {
  if (typeof target === 'function') {
    if (target.invoker) {
      return target
    }

    function invoker (...args) {
      return invoker.real.apply(null,  args.map(arg => $(arg)()))
    }

    invoker.real = target
    invoker.invoker = invoker

    function lazy (...args) {
      function lazyInvoker () {
        return lazy.invoker.apply(null,  args)
      }

      lazyInvoker.invoker = invoker
      lazyInvoker.real = target

      return lazyInvoker
    }

    lazy.invoker = invoker
    lazy.real = target

    return lazy
  }

  function value () {
    return value.real
  }

  value.real = target
  value.invoker = value

  return value
}

$.$ = $
$.$$ = $$
$$.$ = $
$$.$$ = $$
