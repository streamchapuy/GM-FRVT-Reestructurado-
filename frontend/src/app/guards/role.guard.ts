import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from 'express';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole = authService.getUserRole();

  if (userRole === 'admin') {
    router.navigate(['/home-logged']);
    return true;
  } {
    router.navigate(['/']);
    return false;
  }
 

}
