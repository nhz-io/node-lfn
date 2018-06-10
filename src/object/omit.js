import {$, $$} from '../lfn'
import {$$keys} from './keys'

export const $$omit = ks => o => $$keys(o).filter(k => !ks.includes(k)).reduce((a, k) => Object.assign(a, {[k]: o[k]}), {})

export const $omit = ks => $(o => $$omit($(ks)())(o))

export const omit = ks => $$(o => $$omit($(ks)())(o))
