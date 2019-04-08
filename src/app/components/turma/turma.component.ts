import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { TurmaService } from './turma.service';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../usuario/usuario.model';
import { Turma } from './turma.model';
import { DisciplinaDTO } from '../disciplina/disciplina.model';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
  animations: [routerTransition()]
})
export class TurmaComponent extends BaseComponent<Turma> {
  turmas: Turma[] = [];

  constructor(
    private turmaService: TurmaService,
    private router: Router
    ) { super(); }

  // remover quando backend funcionar
  pesquisar() {
    const professor: UsuarioDTO = new UsuarioDTO();
    professor.nome = 'Marcus Vinicius';
    const disciplina: DisciplinaDTO = new DisciplinaDTO();
    disciplina.nome = 'Engenharia da Computação';

    for (let i = 1; i < 11; i++) {
      const turma1 = new Turma();
      turma1.id = i;
      turma1.nome = 'Turma ' + i;
      turma1.semestre = 1;
      turma1.periodo = 2;
      turma1.ano = 2019;
      turma1.disciplina = disciplina;
      turma1.professor = professor;

      this.turmas.push(turma1);
    }

    this.totalRegistro = 11;
  }

  adicionar() {
    this.router.navigateByUrl(this.router.url + '/-1');
  }

  alterar() {
    if (!this.object) {
      // this.toasty.mensagemCodigoSelecionado();
    } else {
      this.router.navigateByUrl(this.router.url + '/' + this.object.id);
    }
  }

  deletar() {
    if (!this.object) {
      // this.toasty.mensagemCodigoSelecionado();
      return;
    }

    // this.dialogService.confirm()
    //     .then(dialog => {
    //         if (dialog) {
    //             this.disciplinaService.deletar(this.object.id)
    //                 .subscribe(dados => {

    //                 }
    //     })
  }

  carregar() {
    this.pesquisaVazia = false;

    this.turmaService
      .consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
      .subscribe(turmas => {
        console.log(turmas);
      });
  }
}
