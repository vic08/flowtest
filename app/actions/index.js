// @flow

import { INCREMENT_COUNTER, DECREMENT_COUNTER} from "../constants/actionTypes"

export type ACTION_ID_TYPE = string

export type DecrementCounterAction = {
  type: ACTION_ID_TYPE,
  value: number
}

export function decrementCounter(value: number): DecrementCounterAction {
  return {
    type: INCREMENT_COUNTER,
    value: value
  }
}

export type IncrementCounterAction = {
  type: ACTION_ID_TYPE,
  value: number
}

export function incrementCounter(value: number): IncrementCounterAction {
  return {
    type: DECREMENT_COUNTER,
    value: value
  }
}