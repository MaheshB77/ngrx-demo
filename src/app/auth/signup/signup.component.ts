import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { changeLoading } from "src/app/store/shared/shared.actions";
import {
  getErrorMessage,
  getLoadingStatus,
} from "src/app/store/shared/shared.selectors";
import { signUpStart } from "../state/auth.actions";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  isLoading$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });

    this.isLoading$ = this.store.select(getLoadingStatus);
    this.errorMessage$ = this.store.select(getErrorMessage);
  }

  onSignUP() {
    if (!this.signUpForm.valid) {
      return;
    }

    let email = this.signUpForm.value.email;
    let password = this.signUpForm.value.password;

    this.store.dispatch(changeLoading({ status: true }));
    this.store.dispatch(signUpStart({ email, password }));
  }

  emailErrorMsgs() {
    const email = this.signUpForm.get("email");
    if (email.touched && !email.valid) {
      if (email.errors.required) {
        return "Email is required";
      } else if (email.errors.email) {
        return "Invalid email format";
      }
    } else {
      return null;
    }
  }

  passwordErrorMsgs() {
    const password = this.signUpForm.get("password");
    if (password.touched && !password.valid) {
      if (password.errors.required) {
        return "Password is required";
      }
    } else {
      return null;
    }
  }
}
