import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterButtonsComponent } from "./counter/counter-buttons/counter-buttons.component";
import { CounterDisplayComponent } from "./counter/counter-display/counter-display.component"; // Import Amexio library
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter/state/counter.reducer";
import { CustomCounterInputComponent } from "./counter/custom-counter-input/custom-counter-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterDisplayComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AmexioWidgetModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
