import { createReducer, on } from "@ngrx/store";
import { loginSuccess, signUpSuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signUpSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export function authReducer(action, state) {
  return _authReducer(action, state);
}
