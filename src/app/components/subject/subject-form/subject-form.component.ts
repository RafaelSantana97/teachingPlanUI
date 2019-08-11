import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { takeUntil } from 'rxjs/operators';

import { BaseForm } from 'src/app/shared/base-classes/base-form';
import { Domain } from 'src/app/shared/domain/domain.model';
import { DomainDataService } from 'src/app/shared/domain/domain.data.service';
import { Subject } from '../subject.model';
import { SubjectDataService } from '../subject.data.service';
import { UserSearchService } from '../../user/user-search/user-search.service';
import { SubjectFormService } from './subject-form.service';

@Component({
  selector: 'tp-subject',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss'],
  animations: [routerTransition()]
})
export class SubjectFormComponent extends BaseForm<Subject> implements OnInit {

  typesSubject: Domain[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectDataService: SubjectDataService,
    private domainDataService: DomainDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userSearchService: UserSearchService,
  ) { super() }

  ngOnInit() {
    this.typesSubject = this.domainDataService.consultDomains("TIPO_DISCIPLINA");
    this.form = SubjectFormService.createFormGroup(this.formBuilder);

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '-1') {
        this.title = "New";

      } else {
        this.title = "Edit";

        if (params['consulta'] == '1') {
          this.title = "Consult";
          this.form.disable();
        }

        this.consultSubject(params["id"]);
      }
    });
  }

  consultSubject(id: number) {
    this.subjectDataService.consultId(id)
      .pipe(takeUntil(this.unsubscribeFromQuery$))
      .subscribe(subject => this.form.reset(subject));
  }

  searchResponsible() {
    if (this.form.disabled) return;

    this.userSearchService.selectTeacher()
      .then(teacher => this.form.get('responsible').reset(teacher));
  }

  onSubmit() {
    if (this.form.disabled) return;
    if (!this.isValid()) return;

    let subject: Subject = { ... this.form.value };

    this.subjectDataService.save(subject)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => this.back());
  }

  back() {
    this.router.navigateByUrl('/subject');
  }
}