import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { DisciplinaService } from './disciplina.service';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { Usuario, UsuarioDTO } from '../usuario/usuario.model';

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

  pesquisar() {
    // this.pagina = 0;
    // this.totalRegistro = 0;
    // this.carregar();

    let responsavel: UsuarioDTO = new UsuarioDTO();
    responsavel.nome = 'Patrizia Palmieri';

    let disp1 = new Disciplina();
    disp1.id = 1;
    disp1.nome = 'Cálculo I';
    disp1.responsavel = responsavel;
    disp1.tipo = 'T';

    let disp2 = new Disciplina();
    disp2.id = 2;
    disp2.nome = 'Cálculo II';
    disp2.responsavel = responsavel;
    disp2.tipo = 'T';

    let disp3 = new Disciplina();
    disp3.id = 3;
    disp3.nome = 'Cálculo III';
    disp3.responsavel = responsavel;
    disp3.tipo = 'T';

    let disp4 = new Disciplina();
    disp4.id = 4;
    disp4.nome = 'Cálculo IV';
    disp4.responsavel = responsavel;
    disp4.tipo = 'T';

    this.disciplinas = [disp1, disp2, disp3, disp4];
    this.totalRegistro = this.disciplinas.length;
  }

  paginar(pagina: number) {
    this.pagina = pagina - 1;
    this.object = null;
    this.carregar();
  }

  limpar() {
    this.pesquisaDesc = '';
    this.totalRegistro = 0;
    this.object = null;
    this.pesquisaVazia = false;
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
        if (disciplinas && disciplinas.length > 0) {
          console.log(disciplinas);
          this.disciplinas = disciplinas;
        }
      });
  }
}