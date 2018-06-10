export function $ (target) {
  if (typeof target === 'function') {
    if (target.invoker) {
      return target
    }

    const invoker = (...args) => invoker.real.apply(null,  args.map(arg => $(arg)()))

    invoker.real = target
    invoker.invoker = invoker

    return invoker
  }

  const value = () => value.real

  value.real = target
  value.invoker = value

  return value
}

export function $$ (target) {
  if (typeof target === 'function') {
    if (target.invoker) {
      return target
    }
    
    const invoker = (...args) => invoker.real.apply(null,  args.map(arg => $(arg)()))

    invoker.real = target
    invoker.invoker = invoker

    const lazy = (...args) => {
      const lazyInvoker = () => lazy.invoker.apply(null,  args)

      lazyInvoker.invoker = invoker
      lazyInvoker.real = target

      return lazyInvoker
    }

    lazy.invoker = invoker
    lazy.real = target

    return lazy
  }
  
  const value = () => value.real

  value.real = target
  value.invoker = value

  return value
}

$.$ = $
$.$$ = $$
$$.$ = $
$$.$$ = $$
