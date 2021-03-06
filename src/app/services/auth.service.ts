import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { urls } from "../constants/urls";
import { LoginResponse } from "../models/loginResponse.model";
import { SignUpResponse } from "../models/signUpResponse.model";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(urls.signInWithEmailPassword, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  signUp(email: string, password: string): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(urls.signUpWithEmailPassword, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  userFromLoginResponse(loginResponse: LoginResponse | SignUpResponse): User {
    // Gets the expiration date from 'expiresIn'
    const expirationDate = new Date(
      new Date().getTime() + +loginResponse.expiresIn * 1000
    );

    const user: User = new User(
      loginResponse.email,
      loginResponse.idToken,
      loginResponse.localId,
      expirationDate
    );

    return user;
  }
}
