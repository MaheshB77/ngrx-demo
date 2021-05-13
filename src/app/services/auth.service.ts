import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginResponse } from "../models/loginResponse.model";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      { email: email, password: password, returnSecureToken: true }
    );
  }

  userFromLoginResponse(loginResponse: LoginResponse): User {
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
