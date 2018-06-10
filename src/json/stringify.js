import {$, $$} from '../lfn'
import {$args} from '../fn'

export const $$stringify = (...args) => o => JSON.stringify(o, ...args)

export const $stringify = (...args) => $(o => JSON.stringify(o, ...$args(...args)))

export const stringify = (...args) => $$(o => JSON.stringify(o, ...$args(...args)))


