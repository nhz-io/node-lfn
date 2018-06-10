import {$, $$} from '../lfn'

export const $$prepend = x => xs => [x, ...xs]

export const $prepend = x => $(xs => $$prepend($(x)())(xs))

export const prepend = x => $$(xs => $$prepend($(x)())(xs))
