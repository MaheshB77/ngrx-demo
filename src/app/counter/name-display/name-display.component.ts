import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterState } from "../state/counter.state";

@Component({
  selector: "app-name-display",
  templateUrl: "./name-display.component.html",
  styleUrls: ["./name-display.component.css"],
})
export class NameDisplayComponent implements OnInit {
  name: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.store.select("counter").subscribe((data) => {
      // This observable will be triggered whenever we 'select' any data from the store anywhere
      console.log("obseravable of name-display called");
      this.name = data.name;
    });
  }
}
