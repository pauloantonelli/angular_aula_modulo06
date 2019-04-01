import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../alunos';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  protected id: any;
  protected aluno: any;
  constructor(private rotaAtiva: ActivatedRoute, private alunos: AlunosService, private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit: alunoDetalheComponent');

    this.inscricao = this.rotaAtiva.data.subscribe(
      (res: { aluno: Aluno }) => {
        console.log('Dados do Resolver carregado');
        this.aluno = res.aluno;
        console.log(this.aluno);
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  editarAluno() {
    // rota imperativa
    this.router.navigate(['/alunos', this.id, 'edit']);
  }
}
