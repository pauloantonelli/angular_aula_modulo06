import { Injectable } from '@angular/core';

import { Aluno } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
    { id: 4, nome: 'Aluno 04', email: 'aluno04@email.com' },
    { id: 5, nome: 'Aluno 05', email: 'aluno05@email.com' },
  ];
  constructor() { }

  getAlunos(): any[] {
    return this.alunos;
  }
  getAluno(id: number) {
    return this.alunos[id - 1];
  }
}
