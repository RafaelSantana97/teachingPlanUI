import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { Course } from '../course.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-course-pesquisa',
    templateUrl: './course-pesquisa.component.html',
    styleUrls: ['./course-pesquisa.component.scss']
})
export class CoursePesquisaComponent extends BasePesquisaModal<Course> {

    courses: Course[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private courseService: CourseService,
    ) { super(activeModal) }

    pesquisar() {
        this.pagina = 0;
        this.totalRegistro = 0;
        this.carregar();
    }

    carregar() {
        this.pesquisaVazia = false;

        this.courseService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
            .subscribe(retorno => {
                //if (retorno.httpStatus === 200) {
                this.courses = retorno.content;
                // }
            });
    }
}