/* eslint-disable */

declare interface CountUpByPayload {
  num: number
}

declare interface CountUpAction extends Action {}
declare interface CountUpByAction extends PayloadAction<CountUpByPayload> {}
declare type CounterAction = CountUpAction & CountUpByAction
