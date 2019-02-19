import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule,
    HomeModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
