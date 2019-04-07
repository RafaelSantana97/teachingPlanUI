import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder } from '@angular/forms';
import { Disciplina } from '../disciplina.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPesquisaService } from '../../usuario/usuario-pesquisa/usuario-pesquisa.service';
import { DisciplinaService } from '../disciplina.service';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class DisciplinaCadastroComponent extends BaseCadastro<Disciplina> implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private disciplinaService: DisciplinaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioPesquisaService: UsuarioPesquisaService,
  ) { super() }

  ngOnInit() {
    this.formulario = Disciplina.createFormGroup(this.formBuilder);

    this.activatedRoute.params.subscribe(
      params => {
        if (params['id'] == '-1') {
          this.titulo = "New";

        } else {
          this.titulo = "Edit";

          if (params['consulta'] == '1') {
            this.titulo = "Consult";
            this.formulario.disable();
          }
        }
      });
  }

  pesquisarResponsavel() {
    this.usuarioPesquisaService.selecionar()
      .then(retorno => {
        retorno.nome = retorno.titulacao + ' ' + retorno.nome;
        this.formulario.get('responsavel').reset(retorno);
      });
  }

  onSubmit() {
    if (!this.isValid()) return;

    let salvar: Disciplina = { ... this.formulario.value };

    this.disciplinaService.salvar(salvar)
      .then(dados => {
        console.log("Disciplina Salva", dados);
      });
  }

  voltar() {
    this.router.navigateByUrl('/subject');
  }
}