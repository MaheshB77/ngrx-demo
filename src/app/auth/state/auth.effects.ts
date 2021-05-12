import { Injectable } from "@angular/core";
import { exhaustMap, map } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            return loginSuccess();
          })
        );
      })
    );
  });
}
