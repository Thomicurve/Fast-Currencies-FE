import { Component } from '@angular/core';
import { Register } from '../models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerInput: Register = new Register();

  constructor(private router: Router){}

  register() {
    
  }

  goBack() {
    this.router.navigate(['/auth/login']);
  }
}