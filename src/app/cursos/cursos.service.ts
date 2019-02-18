import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      {id: 1, nome: 'MongoDB'},
      {id: 2, nome: 'Express'},
      {id: 3, nome: 'Angular 2+'},
      {id: 4, nome: 'Nodejs'},
      {id: 5, nome: 'JavaScript ES6+'},
      {id: 6, nome: 'Não Encontrado'}
    ];
  }
  getCurso(id: number) {
    for (const i of this.getCursos()) {
      // tslint:disable-next-line:triple-equals
      if (i.id == id) {
        return i;
      }
    }
    return null;
  }
  constructor() { }
}
