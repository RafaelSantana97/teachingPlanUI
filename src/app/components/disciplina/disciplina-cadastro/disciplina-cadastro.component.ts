import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder } from '@angular/forms';
import { Disciplina } from '../disciplina.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPesquisaService } from '../../usuario/usuario-pesquisa/usuario-pesquisa.service';
import { DisciplinaService } from '../disciplina.service';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { Dominio } from 'src/app/shared/dominio/dominio.model';
import { DominioService } from 'src/app/shared/dominio/dominio.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class DisciplinaCadastroComponent extends BaseCadastro<Disciplina> implements OnInit {

  tiposDisciplina: Dominio[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private disciplinaService: DisciplinaService,
    private dominioService: DominioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioPesquisaService: UsuarioPesquisaService,
  ) { super() }

  ngOnInit() {
    this.tiposDisciplina = this.dominioService.consultarDominios("TIPO_DISCIPLINA");
    this.formulario = Disciplina.createFormGroup(this.formBuilder);

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '-1') {
        this.titulo = "New";

      } else {
        this.titulo = "Edit";

        if (params['consulta'] == '1') {
          this.titulo = "Consult";
          this.formulario.disable();
        }

        this.consultarDisciplina(params["id"])
      }
    });
  }

  consultarDisciplina(id: number) {
    this.disciplinaService.consultarId(id)
      .subscribe(disciplina => this.formulario.reset(disciplina));
  }

  pesquisarResponsavel() {
    if (this.formulario.disabled) return;

    this.usuarioPesquisaService.selecionar()
      .then(retorno => this.formulario.get('responsavel').reset(retorno));
  }

  onSubmit() {
    if (this.formulario.disabled) return;
    if (!this.isValid()) return;

    let salvar: Disciplina = { ... this.formulario.value };

    this.disciplinaService.salvar(salvar)
      .then(dados => {
        if (dados) this.voltar();
      });
  }

  voltar() {
    this.router.navigateByUrl('/subject');
  }
}