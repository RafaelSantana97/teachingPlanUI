import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from 'src/app/router.animations';

import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { DialogService } from 'src/app/shared/modules/dialog/dialog.service';
import { Disciplina } from './disciplina.model';
import { DisciplinaService } from './disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss'],
  animations: [routerTransition()]
})
export class DisciplinaComponent extends BaseComponent<Disciplina> {
  disciplinas: Disciplina[] = [];

  constructor(
    private dialogService: DialogService,
    private disciplinaService: DisciplinaService,
    private router: Router
  ) { super() }

  adicionar() {
    this.router.navigateByUrl(this.router.url + '/-1');
  }

  alterar() {
    if (!this.object) return;
    this.router.navigateByUrl(this.router.url + '/' + this.object.id);
  }

  deletar() {
    if (!this.object) return;

    this.dialogService.confirm()
      .then(dialog => {
        if (dialog) {

          this.disciplinaService.deletar(this.object.id)
            .then(() => this.pesquisar());
        }
      });
  }

  carregar() {
    this.pesquisaVazia = false;

    this.disciplinaService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
      .subscribe(disciplinas => {
        if (disciplinas) {
          this.disciplinas = disciplinas.content;
          this.totalRegistro = disciplinas.totalElements;
          this.pesquisaVazia = disciplinas.totalElements === 0;
        }
      });
  }
}