import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { customCounter } from "../state/counter.actions";
import { CounterState } from "../state/counter.state";

@Component({
  selector: "app-custom-counter-input",
  templateUrl: "./custom-counter-input.component.html",
  styleUrls: ["./custom-counter-input.component.css"],
})
export class CustomCounterInputComponent implements OnInit {
  customCounterValue;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {}

  onCustomCounterAdd() {
    this.store.dispatch(
      customCounter({ customNumber: parseInt(this.customCounterValue) })
    );
  }
}
