import { createReducer, on } from "@ngrx/store";
import { changeLoading, setErrorMessage } from "./shared.actions";
import { initialState } from "./shared.state";

const _sharedReducer = createReducer(
  initialState,
  on(changeLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
