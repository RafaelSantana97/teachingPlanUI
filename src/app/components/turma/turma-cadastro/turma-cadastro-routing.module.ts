import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmaCadastroComponent } from './turma-cadastro.component';

const routes: Routes = [
    {
        path: '',
        component: TurmaCadastroComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TurmaCadastroRoutingModule { }
