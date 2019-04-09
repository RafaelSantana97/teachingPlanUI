import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmaPesquisaComponent } from './turma-pesquisa.component';

const routes: Routes = [
    {
        path: '',
        component: TurmaPesquisaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TurmaPesquisaRoutingModule { }
