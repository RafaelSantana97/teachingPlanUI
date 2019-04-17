import { Component } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { ClassService } from './class.service';
import { Router } from '@angular/router';
import { Class } from './class.model';
import { DialogService } from 'src/app/shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  animations: [routerTransition()]
})
export class ClassComponent extends BaseComponent<Class> {
  classes: Class[] = [];

  constructor(
    private dialogService: DialogService,
    private classService: ClassService,
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

          this.classService.deletar(this.object.id)
            .then(() => this.pesquisar());
        }
      });
  }

  carregar() {
    this.pesquisaVazia = false;

    this.classService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
      .subscribe(classes => {
        if (classes) {
          this.classes = classes.content;
          this.totalRegistro = classes.totalElements;
          this.pesquisaVazia = classes.totalElements === 0;
        }
      });
  }
}
