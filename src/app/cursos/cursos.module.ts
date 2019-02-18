import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursosService } from './cursos.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [CursosService],
})
export class CursosModule { }
