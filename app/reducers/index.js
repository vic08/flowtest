// @flow

import { combineReducers } from 'redux'
import { INCREMENT_COUNTER, DECREMENT_COUNTER} from "../constants/actionTypes"


export type State = {
  counterValue: number
}

const initialState: State = {
  counterValue: 0
}

function counter(state: number = initialState.counterValue, action: Object): number {
  if (action.type === INCREMENT_COUNTER) {
    return state + action.value
  }
  if (action.type === DECREMENT_COUNTER) {
    return state - action.value;
  }

  return state
}

const todoApp: (state: State, action: Object) => State = combineReducers({
  counterValue: counter
});

export default todoApp