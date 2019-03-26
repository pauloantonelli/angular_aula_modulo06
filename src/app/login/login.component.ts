import { Component, OnInit } from '@angular/core';

import { LoginUsuarioClass } from './login.class';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected usuario: LoginUsuarioClass = new LoginUsuarioClass();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.auth.fazerLogin(this.usuario);
  }
}
