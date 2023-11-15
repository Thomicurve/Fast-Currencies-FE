import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuard } from './core/guards/user-logged.guard';
import { UserNoLoggedGuard } from './core/guards/user-no-logged.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [UserNoLoggedGuard],
    loadChildren: () => import('./public/public-routing.module').then(m => m.PublicRoutingModule)
  },
  {
    path: 'admin',
    canActivate: [UserLoggedGuard],
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: '',
    canActivate: [UserLoggedGuard],
    loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
