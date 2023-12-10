import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedaListComponent } from './monedas/list/moneda-list.component';

const routes: Routes = [
  {
    path: 'monedas',
    component: MonedaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
