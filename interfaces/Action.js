/* eslint-disable */

declare interface Action {
  type: string
}

declare interface PayloadAction<T> extends Action {
  payload: T
}

