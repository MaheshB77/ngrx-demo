import { createReducer, on } from "@ngrx/store";
import { changeLoading } from "./shared.actions";
import { initialState } from "./shared.state";

const _sharedReducer = createReducer(
  initialState,
  on(changeLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.status,
    };
  })
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
