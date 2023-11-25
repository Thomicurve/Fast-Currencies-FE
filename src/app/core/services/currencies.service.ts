import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.model';
import { API_URL } from '../constants';
import { ConvertCurrency } from 'src/app/user/models/convert-currency.model';

@Injectable({providedIn: 'root'})
export class CurrencyService {
  private readonly apiPrefix = "/Currency"

  constructor(private http: HttpClient) { }

  getAllCurrencies(): Observable<Currency[]> {
    const url = API_URL + this.apiPrefix;
    return this.http.get<Currency[]>(url);
  }


  convertCurrency(convertCurrency: ConvertCurrency): Observable<any>  {
    const url = API_URL + this.apiPrefix + "/convert";
    return this.http.post(url, convertCurrency);
  }
  
}