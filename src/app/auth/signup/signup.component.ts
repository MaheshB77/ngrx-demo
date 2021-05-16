import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { signUpStart } from "../state/auth.actions";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onSignUP() {
    if (!this.signUpForm.valid) {
      return;
    }

    let email = this.signUpForm.value.email;
    let password = this.signUpForm.value.password;

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
