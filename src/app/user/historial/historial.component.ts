import { Component, OnInit } from '@angular/core';
import { ConvertionHistory } from 'src/app/core/models/convertion-history.model';
import { HistoryService } from 'src/app/core/services/history.service';

@Component({
  selector: 'historial-page',
  templateUrl: 'historial.component.html',
  styleUrls: ['./historial.component.scss']
})

export class HistorialComponent implements OnInit {

  conversions: ConvertionHistory[] = [];
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyService.getConvertionHistory()
      .subscribe({
        next: (conversions) => {
          this.conversions = conversions;
        },
        error: (err) => {
          console.error(err);
        }
      })
    throw new Error('Method not implemented.');
  }
}