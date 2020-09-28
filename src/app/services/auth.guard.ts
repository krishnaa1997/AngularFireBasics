import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuth()) {
      //this.router.navigate(['/employee']);
      return true;
    } else {
      //this.router.navigate(['/login']);
      console.log('logged out from auth gaurd - else part of auth gaurd');
      return false;
      
    }
  }
}