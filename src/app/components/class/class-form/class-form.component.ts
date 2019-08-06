import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from 'src/app/router.animations';
import { takeUntil } from 'rxjs/operators';

import { BaseForm } from 'src/app/shared/base-classes/base-form';
import { Class } from '../class.model';
import { ClassDataService } from '../class.data.service';
import { Domain } from 'src/app/shared/domain/domain.model';
import { DomainDataService } from 'src/app/shared/domain/domain.data.service';
import { SubjectSearchService } from '../../subject/subject-search/subject-search.service';
import { UserSearchService } from '../../user/user-search/user-search.service';
import { ClassFormService } from './class-form.service';

@Component({
  selector: 'tp-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss'],
  animations: [routerTransition()]
})
export class ClassFormComponent extends BaseForm<Class> implements OnInit {

  semesters: Domain[] = [];
  periods: Domain[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private classDataService: ClassDataService,
    private domainDataService: DomainDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private subjectSearchService: SubjectSearchService,
    private userSearchService: UserSearchService,
  ) { super(); }

  ngOnInit() {
    this.semesters = this.domainDataService.consultDomains("SEMESTRE");
    this.periods = this.domainDataService.consultDomains("PERIODO");
    this.form = ClassFormService.createFormGroup(this.formBuilder);

    this.activatedRoute.params.subscribe(
      params => {
        if (params['id'] === '-1') {
          this.title = 'New';
        } else {
          this.title = 'Edit';

          if (params['consulta'] === '1') {
            this.title = 'Consult';
            this.form.disable();
          }

          this.consultClass(params["id"]);
        }
      });
  }

  consultClass(id: number) {
    this.classDataService.consultId(id)
      .pipe(takeUntil(this.unsubscribeFromQuery$))
      .subscribe(_class => this.form.reset(_class));
  }

  searchTeacher() {
    if (this.form.disabled) return;

    this.userSearchService.selectTeacher()
      .then(retorno => this.form.get('teacher').reset(retorno));
  }

  searchSubject() {
    if (this.form.disabled) return;

    this.subjectSearchService.select()
      .then(retorno => this.form.get('subject').reset(retorno));
  }

  onSubmit() {
    if (this.form.disabled) return;
    if (!this.isValid()) { return; }

    let _class: Class = { ... this.form.value };

    this.classDataService.save(_class)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => this.back());
  }

  back() {
    this.router.navigateByUrl('/class');
  }
}