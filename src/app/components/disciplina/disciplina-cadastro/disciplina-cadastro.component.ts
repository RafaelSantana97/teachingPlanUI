import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormGroup } from '@angular/forms';
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
          this.titulo = "Cadastrar";

        } else {
          this.titulo = "Editar";

          if (params['consulta'] == '1') {
            this.titulo = "Consultar";
            this.formulario.disable();
          }
        }
      });
  }

  pesquisarResponsavel() {
    this.usuarioPesquisaService.selecionar()
      .then(retorno => {
        retorno.nome = retorno.titulacao + ' ' + retorno.nome
        this.formulario.get('responsavel').reset(retorno)
      });
  }

  onSubmit() {
    if (this.formulario.status === 'INVALID') {
      Object.keys(this.formulario.controls).forEach(key => {
        this.formulario.get(key).markAsTouched();
      });

      return;
    }

    this.disciplinaService.salvar(this.formulario.value)
      .subscribe(dados => {
        console.log("Disciplina Salva", dados);
      });
  }

  voltar() {
    this.router.navigateByUrl('/subject');
  }
}