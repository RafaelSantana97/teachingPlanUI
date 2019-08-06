import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
  },
  {
    path: ':id',
    loadChildren: './course-form/course-form.module#CourseFormModule'
  },
  {
    path: ':id/:consulta',
    loadChildren: './course-form/course-form.module#CourseFormModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }