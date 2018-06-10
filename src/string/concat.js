import {$, $$} from '../lfn'

export const $$concat = (...args) => args.reduce((a, x) => a + x, '')

export const $concat = $($$concat)

export const concat = $$($$concat)
