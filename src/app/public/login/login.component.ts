import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginInput: Login = new Login();

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }
}