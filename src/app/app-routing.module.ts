import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';
import { CursosGuard } from './guards/auth-guard/cursos.guard';
import { AlunosGuard } from './guards/auth-guard/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  // lazy loading
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule', canActivate: [AuthGuard], canActivateChild: [CursosGuard] },
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule', canActivate: [AuthGuard] },
  // lazy loading

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
