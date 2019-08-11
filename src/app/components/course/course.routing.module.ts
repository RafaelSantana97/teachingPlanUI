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
    loadChildren: () => import('./course-form/course-form.module').then(fileModule => fileModule.CourseFormModule)
  },
  {
    path: ':id/:consulta',
    loadChildren: () => import('./course-form/course-form.module').then(fileModule => fileModule.CourseFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }