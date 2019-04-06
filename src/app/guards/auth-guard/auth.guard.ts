import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private usuarioAutenticado: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
      console.log('AuthGuard carregada');
      return this.verificarAcesso();
  }

  private verificarAcesso() {
    if(this.usuarioAutenticado.confirmacaoUsuarioAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canLoad(route: Route): Observable<boolean> | boolean {
    /* Podemos melhorar a logica por verificar tambem se o usuario tem permissao para acessar a area pedida */
    console.log('canLoad: Pode carregar o modulo');
    return this.verificarAcesso();
  }
}
