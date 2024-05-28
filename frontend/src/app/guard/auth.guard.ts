import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

interface CheckCookie {
  valid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.getAuthCookie().pipe(
      map((cookie: CheckCookie) => {
        console.log(`cookie`, cookie);
        if (cookie.valid === false) this.router.navigate(['/auth']);
        return cookie.valid === true;
      })
    );
  }
}
