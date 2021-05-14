import { createAction, props } from "@ngrx/store";

export const changeLoading = createAction(
  "changeLoading",
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  "setErrorMessage",
  props<{ message: string }>()
);
