import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  public loggedIn = false;
  public login(): void {
    this.loggedIn = true;
  }
  public logout(): void {
    this.loggedIn = false;
  }

  constructor() {}
}
