import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCadastroComponent } from './course-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: CourseCadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCadastroRoutingModule { }