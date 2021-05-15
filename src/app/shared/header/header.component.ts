import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isUserPresent } from "src/app/auth/state/auth.selectors";
import { AppState } from "src/app/store/app.state";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isUserPresent$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isUserPresent$ = this.store.select(isUserPresent);
  }
}
