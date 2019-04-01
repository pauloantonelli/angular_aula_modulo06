import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {
  public cursos: any [] = [];
  public pagina: number;
  public inscricao: Subscription;
  constructor(private _cursosService: CursosService, private _routes: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    this.inscricao = this._routes.queryParams.subscribe((parametro: any) => {
      this.pagina = parametro['pagina'];
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  proximaPagina() {
    this.pagina ++;
    this._router.navigate(['cursos'], {
      queryParams: {'pagina': this.pagina}
    });
  }
}
