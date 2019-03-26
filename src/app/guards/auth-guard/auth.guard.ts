import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usuarioAutenticado: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.usuarioAutenticado.confirmacaoUsuarioAutenticado()) {
      return true;
    } else {

      this.router.navigate(['/login']);
      return false;
    }
  }
}
