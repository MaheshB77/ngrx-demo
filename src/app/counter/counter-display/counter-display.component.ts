import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-counter-display",
  templateUrl: "./counter-display.component.html",
  styleUrls: ["./counter-display.component.css"],
})
export class CounterDisplayComponent implements OnInit {
  counter: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit() {
    this.store.select("counter").subscribe((data) => {
      this.counter = data.counter;
    });
  }
}
