import { Component } from '@angular/core';
import { Course } from './course.model';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { CourseService } from './course.service';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { UserDTO } from '../user/user.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [routerTransition()]
})
export class CourseComponent extends BaseComponent<Course> {
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { super() }

  // TODO remover metodo quando backend funcionar
  search() {
    let responsible: UserDTO = new UserDTO();
    responsible.name = 'Patrizia Palmieri';

    for (let i = 1; i < 11; i++) {
      let course1 = new Course();
      course1.id = i;
      course1.name = 'Engenharia de Computação ' + i;
      course1.responsible = responsible;

      this.courses.push(course1);
    }

    this.totalElements = 11;
  }

  adicionar() {
    this.router.navigateByUrl(this.router.url + '/-1');
  }

  alterar() {
    if (!this.object) return;
    this.router.navigateByUrl(this.router.url + '/' + this.object.id);
  }

  deletar() {
    if (!this.object) return;

    // this.dialogService.confirm()
    //     .then(dialog => {
    //         if (dialog) {
    //             this.courseService.deletar(this.object.id)
    //                 .subscribe(dados => {

    //                 }
    //     })
  }

  load() {
    this.emptySearch = false;

    this.courseService
      .consultIntervalDescription(this.page, this.itemsPerPage, this.descriptionSearch)
      .subscribe(course => {
        console.log(course);
      });
  }
}