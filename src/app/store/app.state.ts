import { authReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selectors";
import { AuthSate } from "../auth/state/auth.state";
import { sharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectors";
import { SharedState } from "./shared/shared.state";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthSate;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: authReducer,
};
