import { Component } from '@angular/core';
import { Register } from '../models/register.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerInput: Register = new Register();

  constructor(
    private router: Router, 
    private authService: AuthService,
    private alertService: AlertService){}

  register() {
    this.authService.register(this.registerInput).subscribe({
      next: () => {
        this.alertService.showSuccessAlert("Registro exitoso");
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.alertService.showErrorAlert("Error en el registro", "Valide los datos ingresados e intente nuevamente.");
        console.error(err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/auth/login']);
  }
}