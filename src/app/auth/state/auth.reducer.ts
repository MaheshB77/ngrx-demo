import { createReducer } from "@ngrx/store";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState);

export function authReducer(action, state) {
  return _authReducer(action, state);
}
