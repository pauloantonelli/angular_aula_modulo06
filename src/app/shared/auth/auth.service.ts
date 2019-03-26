import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LoginUsuarioClass } from '../../login/login.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected usuarioAutenticado = false;

  public mostrarMenu = new EventEmitter<Boolean>();

  constructor(private router: Router) {}

  fazerLogin(usuario: LoginUsuarioClass) {
    if (usuario.nome == 'paulo@paulo.com' && usuario.senha == 'paulo') {

      this.usuarioAutenticado = true;

      this.mostrarMenu.emit(true);

      this.router.navigate(['/'])
    } else {

      this.usuarioAutenticado = false;

      this.mostrarMenu.emit(false);
    }
  }

  confirmacaoUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
}
