import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Subscription } from 'src/app/core/models/subscription.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { SubscriptionService } from 'src/app/core/services/subscription.service';

@Component({
  selector: 'pasarela-pago-page',
  templateUrl: 'pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.scss']
})

export class PasarelaPagoComponent implements OnInit {
  subcription: Subscription = new Subscription();

  dni: string;
  cardNumber: string;
  fechaVencimiento: string;
  titular: string;
  cvv: string;

  constructor(
    private subscriptionService: SubscriptionService, 
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit(): void {
    const subId = this.route.snapshot.paramMap.get('id');
    if(subId == null) return this.alertService.showErrorAlert('No se ha encontrado la suscripción');

    this.subscriptionService.getSubscriptions()
      .pipe(
        map((subscriptions) => 
          subscriptions.find((subscription) => subscription.id === parseInt(subId))
      ))
      .subscribe((res) => {
        if(res == undefined) return this.alertService.showErrorAlert('No se ha encontrado la suscripción');
        this.subcription = res;
      });
  }

  pay() {
    this.subscriptionService.updateSubscription(this.subcription.id)
      .subscribe({
        next: () => {
          this.alertService.showSuccessAlert('Suscripción actualizada correctamente');
          this.router.navigate(['/mi-perfil']);
        },
        error: (err) => {
          this.alertService.showErrorAlert(err.error.message);
          console.log(err);
          
        }
      })
  }

  cancel() {
    this.router.navigate(['/planes']);
  }
}