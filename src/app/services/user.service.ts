import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  setUserToLocalStorage(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserFromLocalStorage() {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem("user");
  }
}
