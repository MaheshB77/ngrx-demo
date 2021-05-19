import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { exhaustMap, tap } from "rxjs/operators";
import { setUserAfterRefresh } from "src/app/auth/state/auth.actions";
import { UserService } from "src/app/services/user.service";
import { AppState } from "../app.state";
import { autoLogin } from "./shared.actions";

@Injectable({
  providedIn: "root",
})
export class SharedEffects {
  constructor(
    private action$: Actions,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  /**
   * This effect is created for persisting the user after refresh
   */
  autoLogin$ = createEffect(() => {
    return this.action$.pipe(
      ofType(autoLogin),
      exhaustMap((action) => {
        let user = this.userService.getUserFromLocalStorage();
        return of(setUserAfterRefresh({ user }));
      })
    );
  });
}
