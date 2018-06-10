import {$, $$} from '../lfn'
import {$$keys} from './keys'

export const $$pick = ks => o => $$keys(o).filter(k => ks.includes(k)).reduce((a, k) => Object.assign(a, {[k]: o[k]}), {})

export const $pick = ks => $(o => $$pick($((...ks) => ks)(...$(ks)()))(o))

export const pick = ks => $$(o => $$pick($((...ks) => ks)(...$(ks)()))(o))
