import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private token = new BehaviorSubject<string>('');
  public token$ = this.token.asObservable();

  constructor() {
    this.token.next(localStorage.getItem('token') || '');
  }

  login() {
    this.token.next('token');
  }

  isLogged(): boolean {
    return this.token.value.length > 0;
  }

  logout() {
    this.token.next('');
    localStorage.removeItem('token');
  }
}