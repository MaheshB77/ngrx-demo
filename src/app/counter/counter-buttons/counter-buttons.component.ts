import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.css"],
})
export class CounterButtonsComponent implements OnInit {
  @Output() increase = new EventEmitter<null>();
  @Output() decrease = new EventEmitter<null>();
  @Output() reset = new EventEmitter<null>();
  constructor() {}

  ngOnInit() {}

  handleIncrease() {
    this.increase.emit();
  }

  handleDecrease() {
    this.decrease.emit();
  }

  handleReset() {
    this.decrease.emit();
  }
}
