import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  protected id: any;
  protected info: any;
  constructor(private rotaAtiva: ActivatedRoute, private alunos: AlunosService) { }

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
  novoAluno() {

  }
}
