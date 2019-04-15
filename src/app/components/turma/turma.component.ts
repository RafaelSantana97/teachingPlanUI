import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { TurmaService } from './turma.service';
import { Router } from '@angular/router';
import { Turma } from './turma.model';
import { DialogService } from 'src/app/shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
  animations: [routerTransition()]
})
export class TurmaComponent extends BaseComponent<Turma> {
  turmas: Turma[] = [];

  constructor(
    private dialogService: DialogService,
    private turmaService: TurmaService,
    private router: Router
  ) { super(); }

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

          this.turmaService.deletar(this.object.id)
            .then(() => this.pesquisar());
        }
      });
  }

  carregar() {
    this.pesquisaVazia = false;

    this.turmaService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
      .subscribe(turmas => {
        if (turmas) {
          this.turmas = turmas.content;
          this.totalRegistro = turmas.totalElements;
          this.pesquisaVazia = turmas.totalElements === 0;
        }
      });
  }
}
