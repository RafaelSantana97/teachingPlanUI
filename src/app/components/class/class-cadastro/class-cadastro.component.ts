import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from 'src/app/router.animations';

import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { ClassService } from '../class.service';
import { DomainService } from 'src/app/shared/domain/domain.service';
import { SubjectSearchService } from '../../subject/subject-search/subject-search.service';
import { UserSearchService } from '../../user/user-search/user-search.service';

import { Class } from '../class.model';
import { Domain } from 'src/app/shared/domain/domain.model';

@Component({
  selector: 'app-class-cadastro',
  templateUrl: './class-cadastro.component.html',
  styleUrls: ['./class-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class ClassCadastroComponent extends BaseCadastro<Class> implements OnInit {

  semesters: Domain[] = [];
  periods: Domain[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectSearchService: SubjectSearchService,
    private domainService: DomainService,
    private formBuilder: FormBuilder,
    private router: Router,
    private classService: ClassService,
    private spinner: NgxSpinnerService,
    private userSearchService: UserSearchService,
  ) { super(); }

  ngOnInit() {
    this.semesters = this.domainService.consultDomains("SEMESTRE");
    this.periods = this.domainService.consultDomains("PERIODO");
    this.formulario = Class.createFormGroup(this.formBuilder);

    this.activatedRoute.params.subscribe(
      params => {
        if (params['id'] === '-1') {
          this.titulo = 'New';
        } else {
          this.spinner.show();
          this.titulo = 'Edit';

          if (params['consulta'] === '1') {
            this.titulo = 'Consult';
            this.formulario.disable();
          }

          this.consultClass(params["id"]);
        }
      });
  }

  consultClass(id: number) {
    this.classService.consultId(id)
      .subscribe(_class => {
        this.formulario.reset(_class);
        this.spinner.hide();
      });
  }

  searchTeacher() {
    if (this.formulario.disabled) return;

    this.userSearchService.selectTeacher()
      .then(retorno => this.formulario.get('teacher').reset(retorno));
  }

  searchSubject() {
    if (this.formulario.disabled) return;

    this.subjectSearchService.select()
      .then(retorno => this.formulario.get('subject').reset(retorno));
  }

  onSubmit() {
    if (this.formulario.disabled) return;
    if (!this.isValid()) { return; }

    this.spinner.show();

    let salvar: Class = { ... this.formulario.value };

    this.classService.save(salvar)
      .then(dados => {
        this.spinner.hide();

        if (dados) this.back();
      });
  }

  back() {
    this.router.navigateByUrl('/class');
  }
}