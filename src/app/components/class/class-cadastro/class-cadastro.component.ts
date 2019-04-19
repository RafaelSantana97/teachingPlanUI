import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { routerTransition } from 'src/app/router.animations';

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
    private userSearchService: UserSearchService,
  ) { super(); }

  ngOnInit() {
    this.semesters = this.domainService.consultarDomains("SEMESTRE");
    this.periods = this.domainService.consultarDomains("PERIODO");
    this.formulario = Class.createFormGroup(this.formBuilder);

    this.activatedRoute.params.subscribe(
      params => {
        if (params['id'] === '-1') {
          this.titulo = 'New';

        } else {
          this.titulo = 'Edit';

          if (params['consulta'] === '1') {
            this.titulo = 'Consult';
            this.formulario.disable();
          }

          this.consultarClass(params["id"]);
        }
      });
  }

  consultarClass(id: number) {
    this.classService.consultarId(id)
      .subscribe(_class => this.formulario.reset(_class));
  }

  searchTeacher() {
    if (this.formulario.disabled) return;

    this.userSearchService.selecionarTeacher()
      .then(retorno => this.formulario.get('teacher').reset(retorno));
  }

  searchSubject() {
    if (this.formulario.disabled) return;

    this.subjectSearchService.selecionar()
      .then(retorno => this.formulario.get('subject').reset(retorno));
  }

  onSubmit() {
    if (this.formulario.disabled) return;
    if (!this.isValid()) { return; }

    let salvar: Class = { ... this.formulario.value };

    this.classService.salvar(salvar)
      .then(dados => {
        if (dados) this.voltar();
      });
  }

  voltar() {
    this.router.navigateByUrl('/class');
  }
}