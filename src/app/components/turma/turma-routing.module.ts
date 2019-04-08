import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmaComponent } from './turma.component';

const routes: Routes = [
    {
        path: '',
        component: TurmaComponent,
    },
    {
        path: ':id',
        loadChildren: './turma-cadastro/turma-cadastro.module#TurmaCadastroModule'
    },
    {
        path: ':id/:consulta',
        loadChildren: './turma-cadastro/turma-cadastro.module#TurmaCadastroModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TurmaRoutingModule { }
