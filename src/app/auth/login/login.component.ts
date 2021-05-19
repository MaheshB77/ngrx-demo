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
import { loginStart } from "../state/auth.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });

    this.errorMessage$ = this.store.select(getErrorMessage);
  }

  emailErrorMsgs() {
    const email = this.loginForm.get("email");
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
    const password = this.loginForm.get("password");
    if (password.touched && !password.valid) {
      if (password.errors.required) {
        return "Password is required";
      }
    } else {
      return null;
    }
  }

  onLogin() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    this.store.dispatch(changeLoading({ status: true }));
    this.store.select(getLoadingStatus).subscribe((status) => {
      this.isLoading = status;
    });

    this.store.dispatch(loginStart({ email, password }));
  }
}
