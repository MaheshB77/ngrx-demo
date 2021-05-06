import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { getName } from "../state/counter.selectors";

@Component({
  selector: "app-name-display",
  templateUrl: "./name-display.component.html",
  styleUrls: ["./name-display.component.css"],
})
export class NameDisplayComponent implements OnInit {
  name$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.name$ = this.store.select(getName);
  }
}
