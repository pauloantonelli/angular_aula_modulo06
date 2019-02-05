import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    HomeModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
