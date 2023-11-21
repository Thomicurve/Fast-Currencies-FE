import { Component, Input } from '@angular/core';
import { Plan } from '../../models/plan';

@Component({
  selector: 'card-planes',
  templateUrl: 'card-planes.component.html',
  styleUrls: ['card-planes.component.scss'],
  standalone: true
})

export class CardPlanesComponent {
  @Input() plan: Plan;

  constructor() { }

}