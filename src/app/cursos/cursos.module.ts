import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
