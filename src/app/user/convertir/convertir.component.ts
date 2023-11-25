import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/core/models/currency.model';
import { CurrencyService } from 'src/app/core/services/currencies.service';
import { ConvertCurrency } from '../models/convert-currency.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'convertir-page',
  templateUrl: 'convertir.component.html',
  styleUrls: ['./convertir.component.scss']
})

export class ConvertirComponent implements OnInit {
  currencyValueFrom: string = '';
  currencyResult: string = '';
  currencyResultSymbol: any;

  currencyFrom: string = '';
  currencyTo: string = '';

  currencies: Currency[] = [];

  convertionsRemains: number;
  
  constructor(
    private userService: UserService,
    private currencyService: CurrencyService, 
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.currencyService.getAllCurrencies().subscribe((currencies) => {
      this.currencies = currencies;
    });

    this.getRequestsRemaining();
  }

  getRequestsRemaining() {
    this.userService.getMyProfile().subscribe((user) => {
      this.convertionsRemains = user.requestsRemaining;
    });
  }

  swapSymbols() {    
    let temp = this.currencyFrom;
    this.currencyFrom = this.currencyTo;
    this.currencyTo = temp;
  }

  convertCurrency() {    
    if(this.currencyFrom && this.currencyTo && this.currencyValueFrom) {
      const currencyConvert = new ConvertCurrency();
      currencyConvert.amount = Number(this.currencyValueFrom);
      currencyConvert.fromCurrencyId = Number(this.currencyFrom);
      currencyConvert.toCurrencyId = Number(this.currencyTo);

      this.currencyResultSymbol = this.currencies.find((currency) => currency.id == Number(this.currencyTo));

      this.currencyService.convertCurrency(currencyConvert).subscribe((result) => {
        this.currencyResult = result.value;
        this.getRequestsRemaining();
      });
    } else {
      this.alertService.showErrorAlert('Debe seleccionar las monedas y el monto a convertir');
    }


  }
}