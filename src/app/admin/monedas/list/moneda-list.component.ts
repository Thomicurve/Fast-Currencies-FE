import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/core/models/currency.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CurrencyService } from 'src/app/core/services/currencies.service';

@Component({
  selector: 'app-moneda-list',
  templateUrl: 'moneda-list.component.html',
  styleUrls: ['./moneda-list.component.scss']
})

export class MonedaListComponent implements OnInit {
  currencies: Currency[] = [];
  selectedCurrency: Currency = new Currency();
  showModal: boolean = false;

  constructor(private currencyService: CurrencyService, private alertService: AlertService) { }

  ngOnInit() {
    this.currencyService.getAllCurrencies()
      .subscribe((currencies) => this.currencies = currencies);
  }

  onEdit(currency: Currency) {
    this.selectedCurrency = currency;
    this.showModal = true;
  }

  addNewCurrency() {
    this.selectedCurrency = new Currency();
    this.showModal = true;
  }

  delete(currencyId: number) {
    this.currencyService.deleteCurrency(currencyId)
      .subscribe({
        next: () => {
          this.alertService.showSuccessAlert('Moneda eliminada correctamente');
          this.currencyService.getAllCurrencies()
            .subscribe((currencies) => this.currencies = currencies);
        },
        error: (err) => {
          this.alertService.showErrorAlert('Error al eliminar la moneda');
          console.error(err);
        }
      })
  }

  closeModal(isUpdated: boolean) {
    this.showModal = false;
    if (isUpdated) {
      this.currencyService.getAllCurrencies()
        .subscribe((currencies) => this.currencies = currencies);
    }
  } 
}