import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { Turma } from '../turma.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from '../turma.service';
import { FormBuilder } from '@angular/forms';
import { UsuarioPesquisaService } from '../../usuario/usuario-pesquisa/usuario-pesquisa.service';

@Component({
  selector: 'app-turma-cadastro',
  templateUrl: './turma-cadastro.component.html',
  styleUrls: ['./turma-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class TurmaCadastroComponent extends BaseCadastro<Turma> implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private turmaService: TurmaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioPesquisaService: UsuarioPesquisaService,
  ) { super(); }

  ngOnInit() {
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
        }
      }
    );
  }

  onSubmit() {
    if (!this.isValid()) { return; }

    const salvar: Turma = { ... this.formulario.value};

    this.turmaService.salvar(salvar)
      .then(dados => {
        console.log('Turma Salva', dados);
      });
  }

  voltar() {
    this.router.navigateByUrl('/class');
  }
}
