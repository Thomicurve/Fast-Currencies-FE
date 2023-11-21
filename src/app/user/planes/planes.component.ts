import { Component } from '@angular/core';
import { Plan } from '../models/plan';

@Component({
  selector: 'planes-page',
  templateUrl: 'planes.component.html'
})

export class PlanesComponent{

  planes: Plan[] = [
    {
      id: 1,
      description: 'Free',
      price: 0,
      maxRequests: 10
    }
  ];

  constructor() { }
}