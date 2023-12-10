import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from 'src/app/core/models/currency.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CurrencyService } from 'src/app/core/services/currencies.service';

@Component({
  selector: 'app-moneda-edit',
  templateUrl: 'moneda-edit.component.html',
  styleUrls: ['./moneda-edit.component.scss']
})

export class MonedaEditComponent implements OnInit {

  @Input() currency: Currency;

  isNew: boolean = true;
  @Output() closeModal = new EventEmitter();

  constructor(
    private currencyService: CurrencyService, 
    private alertService: AlertService) {
  }

  ngOnInit() {
    if (this.currency.id) {
      this.currencyService.getCurrencyById(this.currency.id)
        .subscribe({
          next: (currency) => this.currency = currency,
          error: (err) => {
            this.alertService.showErrorAlert('Error al obtener la moneda');
            console.error(err);
          }
        })
      this.isNew = false;
    }
  }

  updateCurrency() {
    if (this.isNew) {
      this.currencyService.addNewCurrency(this.currency)
        .subscribe({
          next: () => {
            this.alertService.showSuccessAlert('Moneda creada correctamente');
            this.close(true);
          },
          error: (err) => {
            this.alertService.showErrorAlert('Error al crear la moneda');
            console.error(err);
          }
        })
    } else {
      this.currencyService.updateCurrency(this.currency)
        .subscribe({
          next: () => {
            this.alertService.showSuccessAlert('Moneda actualizada correctamente');
            this.close(true);
          },
          error: (err) => {
            this.alertService.showErrorAlert('Error al actualizar la moneda');
            console.error(err);
          }
        })
    }
  }

  close(isUpdated: boolean = false) {
    this.closeModal.emit(isUpdated);
  }
}