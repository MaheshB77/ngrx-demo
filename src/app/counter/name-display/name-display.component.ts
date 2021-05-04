import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getName } from "../state/counter.selectors";
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
    // used the selector
    this.store.select(getName).subscribe((name) => {
      console.log("obseravable of name-display called");
      this.name = name;
    });
  }
}
