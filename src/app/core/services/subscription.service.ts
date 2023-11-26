import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from '../models/subscription.model';
import { API_URL } from '../constants';

@Injectable({providedIn: 'root'})
export class SubscriptionService {
  private readonly apiPrefix = "/Subscription"

  constructor(private http: HttpClient) { }
  
  getSubscriptions(): Observable<Subscription[]> {
    const url = API_URL + this.apiPrefix;
    return this.http.get<Subscription[]>(url);
  }
}