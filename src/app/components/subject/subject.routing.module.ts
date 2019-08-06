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
    loadChildren: './subject-form/subject-form.module#SubjectFormModule'
  },
  {
    path: ':id/:consulta',
    loadChildren: './subject-form/subject-form.module#SubjectFormModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }