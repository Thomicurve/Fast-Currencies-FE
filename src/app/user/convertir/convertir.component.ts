import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'convertir-page',
  templateUrl: 'convertir.component.html',
  styleUrls: ['./convertir.component.scss']
})

export class ConvertirComponent {
  currencyValueFrom: string = '';
  currencyValueTo: string = '';
  currencyResult: string = '';
  constructor() { }

}