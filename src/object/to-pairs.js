import {$, $$} from '../lfn'
import {$$keys} from './keys'

export const $$toPairs = o => $$keys(o).map(k => ({[k]: o[k]}))

export const $toPairs = $($$toPairs)

export const toPairs = $$($$toPairs)
