import { createAction, props } from "@ngrx/store";

export const loginStart = createAction(
  "loginStart",
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction("loginSuccess");

export const loginFailed = createAction("loginFailed");
