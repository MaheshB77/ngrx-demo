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
