import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
// import { CursosModule } from './cursos/cursos.module'; removido por causa do lazy loading
// import { AlunosModule } from './alunos/alunos.module'; removido por causa do lazy loading

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CursosModule, removido por causa do lazy loading
    // AlunosModule, removido por causa do lazy loading
    HomeModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
