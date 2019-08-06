import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectCadastroComponent } from './subject-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectCadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectCadastroRoutingModule { }