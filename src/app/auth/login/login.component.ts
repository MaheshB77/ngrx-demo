import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
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
    console.log(this.loginForm.value);
  }
}
