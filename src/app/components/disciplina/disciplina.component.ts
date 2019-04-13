import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { DisciplinaService } from './disciplina.service';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
  animations: [routerTransition()]
})
export class DisciplinaComponent extends BaseComponent<Disciplina> {
  disciplinas: Disciplina[] = [];

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router
  ) { super() }

  adicionar() {
    this.router.navigateByUrl(this.router.url + '/-1');
  }

  alterar() {
    if (!this.object) {
      //this.toasty.mensagemCodigoSelecionado();
    } else {
      this.router.navigateByUrl(this.router.url + '/' + this.object.id);
    }
  }

  deletar() {
    if (!this.object) {
      //this.toasty.mensagemCodigoSelecionado();
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

    this.disciplinaService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
      .subscribe(retorno => {

        //if (retorno.httpStatus === 200) {
        this.disciplinas = retorno.content;
        this.totalRegistro = retorno.totalElements;
        this.pesquisaVazia = retorno.totalElements === 0;
        // }
      });
  }
}