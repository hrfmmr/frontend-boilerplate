/* @flow */
import { INCREMENT_COUNTER, INCREMENT_COUNTER_BY } from '../constants/ActionTypes'

const initialState: CounterState = 0

export default function count(
  state: CounterState = initialState,
  action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return state + 1
    }
    case INCREMENT_COUNTER_BY: {
      const { num } = action.payload

      return state + num
    }
    default:
      return state
  }
}
