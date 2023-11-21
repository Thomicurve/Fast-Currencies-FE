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
    return this.token.value.length > 0;
  }

  isAdmin(): boolean {
    return false;
  }

  logout() {
    this.token.next('');
    localStorage.removeItem('token');
  }
}
