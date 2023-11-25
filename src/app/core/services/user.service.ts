import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { API_URL } from '../constants';

@Injectable({providedIn: 'root'})
export class UserService {

  private readonly apiPrefix = "/User"

  constructor(private http: HttpClient) { }
  
  getMyProfile(): Observable<User> {
    const url = API_URL + this.apiPrefix + "/mi-profile";
    return this.http.get<User>(url);
  }
}