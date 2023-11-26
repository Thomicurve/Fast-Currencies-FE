import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from 'src/app/public/models/login.model';
import { Register } from 'src/app/public/models/register.model';
import { API_URL } from '../constants';


@Injectable({providedIn: 'root'})
export class AuthService {
  private token = new BehaviorSubject<string>('');
  public token$ = this.token.asObservable();


  constructor(private http: HttpClient) {
    this.token.next(localStorage.getItem('token') || '');
  }

  login(loginInput: Login): Observable<any> {
    const url = API_URL + '/auth/login';
    return this.http.post(url, loginInput)
  }

  register(registerInput: Register): Observable<any> {
    const url = API_URL + '/auth/register';
    return this.http.post(url, registerInput)
  }

  setToken(token: string) {
    this.token.next(token);
    localStorage.setItem('token', token);
  }

  isLogged(): boolean {
    return !!this.token.value && !this.isTokenExpired();
  }

  isAdmin(): boolean {
    return false;
  }

  logout() {
    this.token.next('');
    localStorage.removeItem('token');
  }

  private isTokenExpired(): boolean {
    if (!this.token.value) {
      return true; 
    }

    // Decodificar el token para obtener la fecha de expiración
    const tokenData = JSON.parse(atob(this.token.value.split('.')[1]));
    const expirationDate = new Date(tokenData.exp * 1000); // Convertir a milisegundos

    // Comparar la fecha de expiración con la fecha y hora actuales
    return expirationDate <= new Date();
  }
}
