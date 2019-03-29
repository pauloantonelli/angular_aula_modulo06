import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CursosGuard implements CanActivateChild {

  constructor(private router: Router, private auth: AuthService) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.auth.confirmacaoUsuarioAutenticado()) {

      console.log('rota filha acessada');
      return true;
    } else {

      console.log('rota filha nao acessada');
      return false;
    }
  }
}
