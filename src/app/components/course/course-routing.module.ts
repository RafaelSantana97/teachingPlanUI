import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';

const routes: Routes = [
    {
        path: '',
        component: CourseComponent,
    },
    {
        path: ':id',
        loadChildren: './course-cadastro/course-cadastro.module#CourseCadastroModule'
    },
    {
        path: ':id/:consulta',
        loadChildren: './course-cadastro/course-cadastro.module#CourseCadastroModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }