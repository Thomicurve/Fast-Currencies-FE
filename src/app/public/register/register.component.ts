import { Component } from '@angular/core';
import { Register } from '../models/register.model';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerInput: Register = new Register();


  register() {
    
  }
}