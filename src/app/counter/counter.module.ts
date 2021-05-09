import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterDisplayComponent } from "./counter-display/counter-display.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { NameDisplayComponent } from "./name-display/name-display.component";
import { counterReducer } from "./state/counter.reducer";

const routes: Routes = [
  {
    path: "",
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterDisplayComponent,
    CustomCounterInputComponent,
    NameDisplayComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    AmexioWidgetModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("counter", counterReducer),
  ],
})
export class CounterModule {}
