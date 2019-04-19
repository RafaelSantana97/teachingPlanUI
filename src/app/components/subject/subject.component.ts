import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from 'src/app/router.animations';

import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { DialogService } from 'src/app/shared/modules/dialog/dialog.service';
import { Subject } from './subject.model';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  animations: [routerTransition()]
})
export class SubjectComponent extends BaseComponent<Subject> {
  subjects: Subject[] = [];

  constructor(
    private dialogService: DialogService,
    private subjectService: SubjectService,
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

          this.subjectService.delete(this.object.id)
            .then(() => this.search());
        }
      });
  }

  load() {
    this.emptySearch = false;

    this.subjectService.consultIntervalDescription(this.page, this.itemsPerPage, this.descriptionSearch)
      .subscribe(subjects => {
        if (subjects) {
          this.subjects = subjects.content;
          this.totalElements = subjects.totalElements;
          this.emptySearch = subjects.totalElements === 0;
        }
      });
  }
}