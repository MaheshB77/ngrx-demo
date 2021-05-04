import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
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
    this.store.select("counter").subscribe((data) => {
      // This observable will be triggered whenever we 'select' any data from the store anywhere
      console.log("obseravable of counter-display called");
      this.counter = data.counter;
    });

    // 2nd way
    // this.counter$ = this.store.select("counter");
  }
}
