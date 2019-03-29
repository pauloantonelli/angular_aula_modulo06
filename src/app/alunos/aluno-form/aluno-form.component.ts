import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormDeactivateInterface } from 'src/app/guards/form-deactivate.interface';

import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, FormDeactivateInterface {

  private inscricao: Subscription;
  public id: any;
  public info: any;
  public formMudou = false;

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
  podeDesativar() {
    if (this.formMudou = true) {
      confirm('quer mesmo sair? Perderá todos os dados nao salvos');

      return true;
    }

  }
}
