import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassCadastroComponent } from './class-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ClassCadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassCadastroRoutingModule { }
