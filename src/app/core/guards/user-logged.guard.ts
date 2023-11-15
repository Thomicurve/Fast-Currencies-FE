import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const UserLoggedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {

    const token = localStorage.getItem('token');
    if(!token) {
      const router = inject(Router);
      router.navigate(['auth/login']);
      return false;
    } 

    return true;
}