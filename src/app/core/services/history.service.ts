import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';
import { ConvertionHistory } from '../models/convertion-history.model';

@Injectable({providedIn: 'root'})
export class HistoryService {
  private readonly apiPrefix = "/ConvertionHistory"

  constructor(private http: HttpClient) { }
  
  getConvertionHistory(): Observable<ConvertionHistory[]> {
    const url = API_URL + this.apiPrefix;
    return this.http.get<ConvertionHistory[]>(url);
  }
}