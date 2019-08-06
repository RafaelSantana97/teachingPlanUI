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
    loadChildren: './subject-cadastro/subject-cadastro.module#SubjectCadastroModule'
  },
  {
    path: ':id/:consulta',
    loadChildren: './subject-cadastro/subject-cadastro.module#SubjectCadastroModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }