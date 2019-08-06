import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectFormComponent } from './subject-form.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectFormRoutingModule { }