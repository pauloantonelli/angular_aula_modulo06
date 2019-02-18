import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  public id: string;
  public inscricao: Subscription;
  public curso: any;
  constructor(private route: ActivatedRoute, private _cursosService: CursosService, private _router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((parametros: any) => {
      this.id = parametros['id'];

      this.curso = this._cursosService.getCurso(parametros.id);
      if (this.curso == null) {
        this._router.navigate(['nao-encontrado']);
      }
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
