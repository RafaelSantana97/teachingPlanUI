import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class.component';

const routes: Routes = [
    {
        path: '',
        component: ClassComponent,
    },
    {
        path: ':id',
        loadChildren: './class-cadastro/class-cadastro.module#ClassCadastroModule'
    },
    {
        path: ':id/:consulta',
        loadChildren: './class-cadastro/class-cadastro.module#ClassCadastroModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassRoutingModule { }
