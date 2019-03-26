import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // lazy loading
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule'},
  // lazy loading

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
