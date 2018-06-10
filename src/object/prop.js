import {$, $$} from '../lfn'

export const $$prop = n => o => o ? o[n] : undefined

export const $prop = n => $(o => $$prop($(n)())(o))

export const prop = n => $$(o => prop($(n)())(o))
