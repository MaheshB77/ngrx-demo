import { createAction, props } from "@ngrx/store";

export const changeLoading = createAction(
  "changeLoading",
  props<{ status: boolean }>()
);
