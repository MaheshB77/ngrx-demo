import { Injectable } from "@angular/core";
import { exhaustMap, map } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { AuthService } from "src/app/services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { changeLoading } from "src/app/store/shared/shared.actions";

@Injectable({
  providedIn: "root",
})
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.userFromLoginResponse(data);
            this.store.dispatch(changeLoading({ status: false }));
            return loginSuccess({ user: user });
          })
        );
      })
    );
  });
}
