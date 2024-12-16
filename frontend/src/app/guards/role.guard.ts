import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


export const roleGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const userRole = inject(AuthService).getUserRole();

  if (route.data['roles'].includes(userRole)) {
    return true;
  } else if (userRole === 'operario') {
    router.navigate(['/inicioOperario'])
  }
  return false;
}
