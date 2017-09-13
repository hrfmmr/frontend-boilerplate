/* @flow */
import { INCREMENT_COUNTER, INCREMENT_COUNTER_BY } from '../constants/ActionTypes'

export function increment(): CountUpAction {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function incrementBy(num: number): CountUpByAction {
  return {
    type: INCREMENT_COUNTER_BY,
    payload: {
      num,
    },
  }
}
