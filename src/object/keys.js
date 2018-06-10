import {$, $$} from '../lfn'

export const $$keys = o => Object.keys(o || {})

export const $keys = $($$keys)

export const keys = $$($$keys)

