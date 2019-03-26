import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  public title = 'Modulo06';

  public inscricao: Subscription;

  public mostrarMenu = false;

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.inscricao = this.auth.mostrarMenu.subscribe(
      (sucesso) => {
        this.mostrarMenu = sucesso;
      });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
