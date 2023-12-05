import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertirComponent } from './convertir/convertir.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { HistorialComponent } from './historial/historial.component';
import { PlanesComponent } from './planes/planes.component';
import { PasarelaPagoComponent } from './pasarela-pago/pasarela-pago.component';

const routes: Routes = [
  {
    path: 'convertir',
    component: ConvertirComponent
  },
  {
    path: 'mi-perfil',
    component: MiPerfilComponent
  },
  {
    path: 'historial',
    component: HistorialComponent
  },
  {
    path: 'planes',
    component: PlanesComponent
  },
  {
    path: 'pasarela-pago/:id',
    component: PasarelaPagoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'convertir'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
