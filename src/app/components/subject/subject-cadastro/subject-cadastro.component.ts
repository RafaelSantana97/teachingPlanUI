import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder } from '@angular/forms';
import { Subject } from '../subject.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPesquisaService } from '../../user/user-pesquisa/user-pesquisa.service';
import { SubjectService } from '../subject.service';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { Domain } from 'src/app/shared/domain/domain.model';
import { DomainService } from 'src/app/shared/domain/domain.service';

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
    private userPesquisaService: UserPesquisaService,
  ) { super() }

  ngOnInit() {
    this.typesSubject = this.domainService.consultarDomains("TIPO_DISCIPLINA");
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

        this.consultarSubject(params["id"])
      }
    });
  }

  consultarSubject(id: number) {
    this.subjectService.consultarId(id)
      .subscribe(subject => this.formulario.reset(subject));
  }

  pesquisarResponsible() {
    if (this.formulario.disabled) return;

    this.userPesquisaService.selecionar()
      .then(retorno => this.formulario.get('responsible').reset(retorno));
  }

  onSubmit() {
    if (this.formulario.disabled) return;
    // if (!this.isValid()) return;

    let salvar: Subject = { ... this.formulario.value };

    this.subjectService.salvar(salvar)
      .then(dados => {
        if (dados) this.voltar();
      });
  }

  voltar() {
    this.router.navigateByUrl('/subject');
  }
}