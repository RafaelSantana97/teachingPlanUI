import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectComponent } from './subject.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectComponent,
  },
  {
    path: ':id',
    loadChildren: () => import('./subject-form/subject-form.module').then(fileModule => fileModule.SubjectFormModule)
  },
  {
    path: ':id/:consulta',
    loadChildren: () => import('./subject-form/subject-form.module').then(fileModule => fileModule.SubjectFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }