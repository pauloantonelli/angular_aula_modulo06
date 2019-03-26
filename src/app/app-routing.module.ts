import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';

const routes: Routes = [
  // lazy loading
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule', canActivate: [AuthGuard] },
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule', canActivate: [AuthGuard]},
  // lazy loading

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
