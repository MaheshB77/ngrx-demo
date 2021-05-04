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
  // 1st way
  counter: number;

  // 2nd way
  // counter$: Observable<CounterState>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    // 1st way
    // used the selector
    this.store.select(getCounter).subscribe((counter) => {
      console.log("obseravable of counter-display called");
      this.counter = counter;
    });

    // 2nd way
    // this.counter$ = this.store.select("counter");
  }
}
