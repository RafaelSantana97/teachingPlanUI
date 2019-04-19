import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder } from '@angular/forms';
import { Course } from '../course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSearchService } from '../../user/user-search/user-search.service';
import { CourseService } from '../course.service';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';

@Component({
  selector: 'app-subject',
  templateUrl: './course-cadastro.component.html',
  styleUrls: ['./course-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class CourseCadastroComponent extends BaseCadastro<Course> implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userSearchService: UserSearchService,
  ) { super() }

  ngOnInit() {
    this.formulario = Course.createFormGroup(this.formBuilder);

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

  searchResponsible() {
    this.userSearchService.selecionar()
      .then(retorno => {
        retorno.name = retorno.levelDegree + ' ' + retorno.name;
        this.formulario.get('responsible').reset(retorno);
      });
  }

  onSubmit() {
    if (!this.isValid()) return;

    let salvar: Course = { ... this.formulario.value };

    this.courseService.salvar(salvar)
      .then(dados => {
        console.log("Course Salva", dados);
      });
  }

  voltar() {
    this.router.navigateByUrl('/subject');
  }
}