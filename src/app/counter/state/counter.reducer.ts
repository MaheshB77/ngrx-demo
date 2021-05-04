import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, customCounter } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customCounter, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.customNumber,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
