import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Login } from 'src/app/public/models/login.model';
import { Register } from 'src/app/public/models/register.model';
import { API_URL } from '../constants';


@Injectable({providedIn: 'root'})
export class AuthService {
  public token = new BehaviorSubject<string>('');

  public isUserAdmin = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.token.next(localStorage.getItem('token') || '');

    // Si el token existe validamos si es admin
    if(this.token.value) {
      this.isAdmin();
    } else {
      this.isUserAdmin.next(false);
    }
  }

  login(loginInput: Login): Observable<any> {
    const url = API_URL + '/auth/login';
    return this.http.post(url, loginInput)
  }

  register(registerInput: Register): Observable<any> {
    const url = API_URL + '/auth/register';
    return this.http.post(url, registerInput)
  }

  async setToken(token: string) {
    this.token.next(token);
    await this.isAdmin();
    localStorage.setItem('token', token);
  }

  isLogged(): boolean {
    return !!this.token.value && !this.isTokenExpired();
  }

  async isAdmin(): Promise<boolean> {
    const url = API_URL + '/auth/role-admin';
    const result = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + this.token.value
      }
    });
    const data: boolean = await result.json();
    this.isUserAdmin.next(data);
    return data;
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
