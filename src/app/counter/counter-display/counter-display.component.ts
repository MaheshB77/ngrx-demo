import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { getCounter } from "../state/counter.selectors";

@Component({
  selector: "app-counter-display",
  templateUrl: "./counter-display.component.html",
  styleUrls: ["./counter-display.component.css"],
})
export class CounterDisplayComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
