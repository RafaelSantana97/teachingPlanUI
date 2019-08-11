import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './class.component';

const routes: Routes = [
  {
    path: '',
    component: ClassComponent,
  },
  {
    path: ':id',
    loadChildren: () => import('./class-form/class-form.module').then(fileModule => fileModule.ClassFormModule)
  },
  {
    path: ':id/:consulta',
    loadChildren: () => import('./class-form/class-form.module').then(fileModule => fileModule.ClassFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
