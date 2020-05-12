import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../shared/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly loginService: LoginServiceService) {}

  public get loggedIn(): boolean {
    return this.loginService.loggedIn;
  }

  public login(): void {
    this.loginService.login();
  }
  public logout(): void {
    this.loginService.logout();
  }

  ngOnInit(): void {}
}
