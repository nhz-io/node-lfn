import {$, $$} from '../lfn'

export const $$map = fn => xs => (xs || []).map(fn)

export const $map = fn => $(xs => (xs || []).map(fn))

export const map = fn => $$(xs => (xs || []).map(fn))
