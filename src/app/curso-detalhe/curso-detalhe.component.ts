import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  public id: string;
  public inscricao: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((parametros: any) => {
      this.id = parametros['id'];
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
