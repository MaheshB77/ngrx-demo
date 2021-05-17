import { createReducer, on } from "@ngrx/store";
import {
  loginSuccess,
  logout,
  setUserAfterRefresh,
  signUpSuccess,
} from "./auth.actions";
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
  }),
  on(setUserAfterRefresh, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function authReducer(action, state) {
  return _authReducer(action, state);
}
