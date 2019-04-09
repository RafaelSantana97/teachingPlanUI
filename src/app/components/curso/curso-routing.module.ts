import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './curso.component';

const routes: Routes = [
    {
        path: '',
        component: CursoComponent,
    },
    {
        path: ':id',
        loadChildren: './curso-cadastro/curso-cadastro.module#CursoCadastroModule'
    },
    {
        path: ':id/:consulta',
        loadChildren: './curso-cadastro/curso-cadastro.module#CursoCadastroModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursoRoutingModule { }