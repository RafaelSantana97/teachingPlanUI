import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaComponent } from './disciplina.component';

const routes: Routes = [
    {
        path: '',
        component: DisciplinaComponent,
    },
    {
        path: ':id',
        loadChildren: './disciplina-cadastro/disciplina-cadastro.module#DisciplinaCadastroModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinaRoutingModule { }