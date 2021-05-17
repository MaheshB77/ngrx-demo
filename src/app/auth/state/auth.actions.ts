import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loginStart = createAction(
  "loginStart",
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  "loginSuccess",
  props<{ user: User }>()
);

export const signUpStart = createAction(
  "signUpStart",
  props<{ email: string; password: string }>()
);

export const signUpSuccess = createAction(
  "signUpSuccess",
  props<{ user: User }>()
);

// This action is helpful for autoLogin (persisting user after refresh)
export const setUserAfterRefresh = createAction(
  "setUserAfterRefresh",
  props<{ user: User }>()
);
