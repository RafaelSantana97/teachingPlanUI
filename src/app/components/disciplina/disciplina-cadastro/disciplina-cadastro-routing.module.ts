import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaCadastroComponent } from './disciplina-cadastro.component';

const routes: Routes = [
    {
        path: '',
        component: DisciplinaCadastroComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinaCadastroRoutingModule { }