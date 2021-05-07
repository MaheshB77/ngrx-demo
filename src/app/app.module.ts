import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterButtonsComponent } from "./counter/counter-buttons/counter-buttons.component";
import { CounterDisplayComponent } from "./counter/counter-display/counter-display.component"; // Import Amexio library
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter/state/counter.reducer";
import { CustomCounterInputComponent } from "./counter/custom-counter-input/custom-counter-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NameDisplayComponent } from "./counter/name-display/name-display.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/header/header.component";
import { environment } from "src/environments/environment";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { appReducer } from "./store/app.state";
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterDisplayComponent,
    CustomCounterInputComponent,
    NameDisplayComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    AddPostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AmexioWidgetModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
