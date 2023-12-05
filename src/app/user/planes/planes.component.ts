import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/core/services/subscription.service';
import { Subscription } from 'src/app/core/models/subscription.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'planes-page',
  templateUrl: 'planes.component.html'
})

export class PlanesComponent implements OnInit{

  subscriptions: Subscription[] = [];
  userSubscription: string;

  constructor(
    private subscriptionService: SubscriptionService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.subscriptionService.getSubscriptions().subscribe((subscriptions) => {
      this.subscriptions = subscriptions;
    });

    this.userService.getMyProfile().subscribe((user) => {
      this.userSubscription = user.subscriptionDescription;
    });
    
  }
}