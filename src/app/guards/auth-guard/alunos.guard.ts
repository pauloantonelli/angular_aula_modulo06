import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  constructor(private router: Router, private auth: AuthService) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.auth.confirmacaoUsuarioAutenticado()) {

      if (state.url.includes('/edit')) {

        // alert('sem acesso no momento!');
        /* esse valor poderia vir de um servico ligado ao servidor, aonde mandariamos o usuario logado pra la,
        e receber se ele pode ou nao acessar a edicao de dados*/
        // return false;
        console.log('AlunosGuard carregada');
      }
      return true;
    } else {

      console.log(+ state);
      return false;
    }
  }
}
