import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';

import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { Domain } from 'src/app/shared/domain/domain.model';
import { DomainService } from 'src/app/shared/domain/domain.service';
import { Subject } from '../subject.model';
import { SubjectService } from '../subject.service';
import { UserSearchService } from '../../user/user-search/user-search.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject-cadastro.component.html',
  styleUrls: ['./subject-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class SubjectCadastroComponent extends BaseCadastro<Subject> implements OnInit {

  typesSubject: Domain[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectService: SubjectService,
    private domainService: DomainService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userSearchService: UserSearchService,
  ) { super() }

  ngOnInit() {
    this.typesSubject = this.domainService.consultDomains("TIPO_DISCIPLINA");
    this.formulario = Subject.createFormGroup(this.formBuilder);

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '-1') {
        this.titulo = "New";

      } else {
        this.titulo = "Edit";

        if (params['consulta'] == '1') {
          this.titulo = "Consult";
          this.formulario.disable();
        }

        this.consultSubject(params["id"]);
      }
    });
  }

  consultSubject(id: number) {
    this.subjectService.consultId(id)
      .then(subject => {
        this.formulario.reset(subject)
      });
  }

  searchResponsible() {
    if (this.formulario.disabled) return;

    this.userSearchService.selectTeacher()
      .then(retorno => this.formulario.get('responsible').reset(retorno));
  }

  onSubmit() {
    if (this.formulario.disabled) return;
    if (!this.isValid()) return;

    let salvar: Subject = { ... this.formulario.value };

    this.subjectService.save(salvar)
      .then(() => this.back());
  }

  back() {
    this.router.navigateByUrl('/subject');
  }
}