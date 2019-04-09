import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoCadastroComponent } from './curso-cadastro.component';

const routes: Routes = [
    {
        path: '',
        component: CursoCadastroComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursoCadastroRoutingModule { }