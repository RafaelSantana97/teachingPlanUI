import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { Turma } from '../turma.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from '../turma.service';
import { FormBuilder } from '@angular/forms';
import { UsuarioPesquisaService } from '../../usuario/usuario-pesquisa/usuario-pesquisa.service';
import { DisciplinaPesquisaService } from '../../disciplina/disciplina-pesquisa/disciplina-pesquisa.service';
import { Dominio } from 'src/app/shared/dominio/dominio.model';
import { DominioService } from 'src/app/shared/dominio/dominio.service';

@Component({
  selector: 'app-turma-cadastro',
  templateUrl: './turma-cadastro.component.html',
  styleUrls: ['./turma-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class TurmaCadastroComponent extends BaseCadastro<Turma> implements OnInit {

  semestres: Dominio[] = [];
  periodos: Dominio[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private disciplinaPesquisaService: DisciplinaPesquisaService,
    private dominioService: DominioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private turmaService: TurmaService,
    private usuarioPesquisaService: UsuarioPesquisaService,
  ) { super(); }

  ngOnInit() {
    this.semestres = this.dominioService.consultarDominios("SEMESTRE");
    this.periodos = this.dominioService.consultarDominios("PERIODO");
    this.formulario = Turma.createFormGroup(this.formBuilder);

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

          this.consultarTurma(params["id"]);
        }
      });
  }

  consultarTurma(id: number) {
    this.turmaService.consultarId(id)
      .subscribe(turma => this.formulario.reset(turma));
  }

  pesquisarProfessor() {
    if (this.formulario.disabled) return;

    this.usuarioPesquisaService.selecionarProfessor()
      .then(retorno => this.formulario.get('professor').reset(retorno));
  }

  pesquisarDisciplina() {
    if (this.formulario.disabled) return;

    this.disciplinaPesquisaService.selecionar()
      .then(retorno => this.formulario.get('disciplina').reset(retorno));
  }

  onSubmit() {
    if (this.formulario.disabled) return;
    if (!this.isValid()) { return; }

    let salvar: Turma = { ... this.formulario.value };

    this.turmaService.salvar(salvar)
      .then(dados => {
        if (dados) this.voltar();
      });
  }

  voltar() {
    this.router.navigateByUrl('/class');
  }
}