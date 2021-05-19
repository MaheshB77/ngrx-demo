import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { logout } from "src/app/auth/state/auth.actions";
import { isUserPresent } from "src/app/auth/state/auth.selectors";
import { UserService } from "src/app/services/user.service";
import { AppState } from "src/app/store/app.state";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isUserPresent$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.isUserPresent$ = this.store.select(isUserPresent);
  }

  onLogout(event: Event) {
    event.preventDefault();

    this.store.dispatch(logout());
    this.userService.removeUserFromLocalStorage();
  }
}
