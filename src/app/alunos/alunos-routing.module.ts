import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosGuard } from '../guards/auth-guard/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/auth-guard/alunos-deactivate.guard';
import { AlunosResolveGuard } from './resolve-guard/aluno-detalhe.resolver';


const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunosResolveGuard } },
      { path: ':id/edit', component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
