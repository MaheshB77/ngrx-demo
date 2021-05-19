import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const changeLoading = createAction(
  "changeLoading",
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  "setErrorMessage",
  props<{ message: string }>()
);

export const autoLogin = createAction("autoLogin");
