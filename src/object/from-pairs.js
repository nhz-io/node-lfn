import {$, $$} from '../lfn'

export const $$fromPairs = ps => (ps || []).reduce((a, p) => Object.assign(a, p), {})

export const $fromPairs = $($$fromPairs)

export const fromPairs = $$($$fromPairs)
