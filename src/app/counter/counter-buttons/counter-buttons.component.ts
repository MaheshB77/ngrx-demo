import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrement, increment, reset } from "../state/counter.actions";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.css"],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit() {}

  handleIncrease() {
    this.store.dispatch(increment());
  }

  handleDecrease() {
    this.store.dispatch(decrement());
  }

  handleReset() {
    this.store.dispatch(reset());
  }
}
