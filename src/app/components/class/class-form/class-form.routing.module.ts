import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassFormComponent } from './class-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClassFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassFormRoutingModule { }
