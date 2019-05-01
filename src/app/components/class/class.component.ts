import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from 'src/app/router.animations';

import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { DialogService } from 'src/app/shared/modules/dialog/dialog.service';

import { Class } from './class.model';
import { ClassService } from './class.service';

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
    private router: Router,
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

          this.classService.delete(this.object.id)
            .then(() => this.search());
        }
      });
  }

  load() {
    this.emptySearch = false;

    this.classService.consultIntervalDescription(this.page, this.itemsPerPage, this.form.get("descriptionSearch").value)
      .then(classes => {
        this.classes = classes.content;
        this.totalElements = classes.totalElements;
        this.emptySearch = classes.totalElements === 0;
      });
  }
}
