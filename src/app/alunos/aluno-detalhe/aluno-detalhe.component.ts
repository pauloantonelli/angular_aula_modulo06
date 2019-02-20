import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  protected id: any;
  protected info: any;
  constructor(private rotaAtiva: ActivatedRoute, private alunos: AlunosService, private router: Router) { }

  ngOnInit() {
    this.inscricao = this.rotaAtiva.params.subscribe((res: any) => {
      this.id = res['id'];
      for (const id of this.alunos.getAlunos()) {
        // tslint:disable-next-line:triple-equals
        if (this.id == id.id) {
          this.info = id;
        }
      }
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  editarAluno() {
    // rota imperativa
    this.router.navigate(['/alunos', this.id, 'edit']);
  }
}
