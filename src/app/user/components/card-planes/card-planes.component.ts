import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subscription } from 'src/app/core/models/subscription.model';

@Component({
  selector: 'card-planes',
  templateUrl: 'card-planes.component.html',
  styleUrls: ['card-planes.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class CardPlanesComponent {
  @Input() subscription: Subscription = new Subscription();

  constructor() { }

}