import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { AlunoFormComponent } from 'src/app/alunos/aluno-form/aluno-form.component';

@Injectable({
  providedIn: 'root'
})

export class AlunosDeactivateGuard
  implements CanDeactivate<AlunoFormComponent> {
  constructor() {}

  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    alert('guarda de rotas ativada! permissao de desativar rota: ' + !component.formMudou);

    // recebe o valor de confirmacao do componente aluno e se for true ja geramos um retorno da funcao do componente como true
    return component.podeDesativar() ? component.podeDesativar(): true;

    /* se o formulario nao mudou (false) nao tem permissao de mudar rota (false),
    se formulario nao mudou (false) tem permissao de mudar rota (true) */
    return !component.formMudou;
  }
}
