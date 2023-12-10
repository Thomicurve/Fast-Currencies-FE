import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AdminGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {

    const router = inject(Router);
    const authService = inject(AuthService);
    const userIsAdmin = await authService.isAdmin();

    if(!userIsAdmin) {
      router.navigate(['/']);
      return false;
    }
    return true;
}