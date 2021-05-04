import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getCounter } from "../state/counter.selectors";
import { CounterState } from "../state/counter.state";

@Component({
  selector: "app-counter-display",
  templateUrl: "./counter-display.component.html",
  styleUrls: ["./counter-display.component.css"],
})
export class CounterDisplayComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
