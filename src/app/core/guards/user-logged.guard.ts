import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const UserLoggedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);

    if(!authService.isLogged()) {
      const router = inject(Router);
      router.navigate(['auth/login']);
      return false;
    } 

    return true;
}