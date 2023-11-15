import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const UserNoLoggedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {

    const authService = inject(AuthService);

    if(authService.isLogged()) {
      const router = inject(Router);
      router.navigate(['']);
      return false;
    }
    return true;
}