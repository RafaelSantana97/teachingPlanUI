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
    loadChildren: './class-form/class-form.module#ClassFormModule'
  },
  {
    path: ':id/:consulta',
    loadChildren: './class-form/class-form.module#ClassFormModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
