import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/core/services/subscription.service';
import { Subscription } from 'src/app/core/models/subscription.model';

@Component({
  selector: 'planes-page',
  templateUrl: 'planes.component.html'
})

export class PlanesComponent implements OnInit{

  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.subscriptionService.getSubscriptions().subscribe((subscriptions) => {
      this.subscriptions = subscriptions;
    });
  }
}