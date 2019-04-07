import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { DisciplinaService } from './disciplina.service';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../usuario/usuario.model';

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

  // TODO remover metodo quando backend funcionar
  pesquisar() {
    let responsavel: UsuarioDTO = new UsuarioDTO();
    responsavel.nome = 'Patrizia Palmieri';

    for (let i = 1; i < 11; i++) {
      let disp1 = new Disciplina();
      disp1.id = i;
      disp1.nome = 'Cálculo ' + i;
      disp1.responsavel = responsavel;
      disp1.tipo = 'T';

      this.disciplinas.push(disp1);
    }

    this.totalRegistro = 11;
  }

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

    this.disciplinaService
      .consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
      .subscribe(disciplinas => {
        console.log(disciplinas);
      });
  }
}