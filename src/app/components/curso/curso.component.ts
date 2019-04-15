import { Component } from '@angular/core';
import { Curso } from './curso.model';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { CursoService } from './curso.service';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../usuario/usuario.model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
  animations: [routerTransition()]
})
export class CursoComponent extends BaseComponent<Curso> {
  cursos: Curso[] = [];

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { super() }

  // TODO remover metodo quando backend funcionar
  pesquisar() {
    let responsavel: UsuarioDTO = new UsuarioDTO();
    responsavel.nome = 'Patrizia Palmieri';

    for (let i = 1; i < 11; i++) {
      let curso1 = new Curso();
      curso1.id = i;
      curso1.nome = 'Engenharia de Computação ' + i;
      curso1.responsavel = responsavel;

      this.cursos.push(curso1);
    }

    this.totalRegistro = 11;
  }

  adicionar() {
    this.router.navigateByUrl(this.router.url + '/-1');
  }

  alterar() {
    if (!this.object) return;
    this.router.navigateByUrl(this.router.url + '/' + this.object.id);
  }

  deletar() {
    if (!this.object) return;

    // this.dialogService.confirm()
    //     .then(dialog => {
    //         if (dialog) {
    //             this.cursoService.deletar(this.object.id)
    //                 .subscribe(dados => {

    //                 }
    //     })
  }

  carregar() {
    this.pesquisaVazia = false;

    this.cursoService
      .consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
      .subscribe(curso => {
        console.log(curso);
      });
  }
}