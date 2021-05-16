import { Injectable } from "@angular/core";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loginStart,
  loginSuccess,
  signUpStart,
  signUpSuccess,
} from "./auth.actions";
import { AuthService } from "src/app/services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import {
  changeLoading,
  setErrorMessage,
} from "src/app/store/shared/shared.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  /**
   * This effect will be triggered after dispatching the 'loginStart' action
   */
  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.userFromLoginResponse(data);
            this.store.dispatch(changeLoading({ status: false }));
            this.store.dispatch(setErrorMessage({ message: "" }));

            return loginSuccess({ user: user });
          }),
          catchError((errorResponse) => {
            this.store.dispatch(changeLoading({ status: false }));
            let errorMessage = errorResponse.error.error.message; //Based on firebase response format

            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  /**
   * Navigate to home after 'loginSuccess' action
   */
  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          this.router.navigate(["/"]);
        })
      );
    },
    { dispatch: false }
  );

  /**
   * This effect will be triggered after dispatching the 'signUpStart' action
   */
  signUp$ = createEffect(() => {
    return this.action$.pipe(
      ofType(signUpStart),
      exhaustMap((action) => {
        return this.authService.signUp(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.userFromLoginResponse(data);
            this.store.dispatch(changeLoading({ status: false }));
            this.store.dispatch(setErrorMessage({ message: "" }));

            return signUpSuccess({ user: user });
          }),
          catchError((errorResponse) => {
            this.store.dispatch(changeLoading({ status: false }));
            let errorMessage = errorResponse.error.error.message; //Based on firebase response format

            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  /**
   * Navigate to home after 'signUpSuccess'
   */
  signUpRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(signUpSuccess),
        tap((action) => {
          this.router.navigate(["/"]);
        })
      );
    },
    { dispatch: false }
  );
}
