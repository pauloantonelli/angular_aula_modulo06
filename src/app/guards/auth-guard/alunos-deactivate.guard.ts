import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { FormDeactivateInterface } from '../form-deactivate.interface';

@Injectable({
  providedIn: 'root'
})

export class AlunosDeactivateGuard
  implements CanDeactivate<FormDeactivateInterface> {
  constructor() {}

  canDeactivate(
    component: FormDeactivateInterface,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    /* recebe o valor de confirmacao do componente em que a interface esta implementada
     e se for true ja geramos um retorno da funcao do componente como true */
    return component.podeDesativar() ? component.podeDesativar(): true;
  }
}
