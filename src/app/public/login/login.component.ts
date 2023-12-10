import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from '../models/login.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginInput: Login = new Login();

  constructor(
    private authService: AuthService, 
    private alertService: AlertService,
    private router: Router) {}

  login() {
    this.authService.login(this.loginInput).subscribe({
      next: async (res) => {
        this.alertService.showSuccessAlert("Inicio de sesión exitoso");
        await this.authService.setToken(res.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.alertService.showErrorAlert("Error en el inicio de sesión", "Valide los datos ingresados e intente nuevamente.");
        console.error(err);
      }
    });
  }
}