import {$, $$} from '../lfn'

export const $$append = x => xs => [...xs, x]

export const $append = x => $(xs => $$append($(x)())(xs))

export const append = x => $$(xs => $$append($(x)())(xs))
