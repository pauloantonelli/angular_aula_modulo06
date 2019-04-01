import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Aluno } from '../alunos';
import { AlunosService } from '../alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosResolveGuard implements Resolve<Aluno> {

  constructor(private alunos: AlunosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    console.log('ResolveGuard carregada');
    const id = route.params['id'];

    return this.alunos.getAluno(id);
  }
}
