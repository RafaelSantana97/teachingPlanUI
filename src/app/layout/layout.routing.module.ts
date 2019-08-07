import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(fileModule => fileModule.DashboardModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/charts.module').then(fileModule => fileModule.ChartsModule)
      },
      {
        path: 'course',
        loadChildren: () => import('../components/course/course.module').then(fileModule => fileModule.CourseModule)
      },
      {
        path: 'class',
        loadChildren: () => import('../components/class/class.module').then(fileModule => fileModule.ClassModule)
      },
      {
        path: 'subject',
        loadChildren: () => import('../components/subject/subject.module').then(fileModule => fileModule.SubjectModule)
      },
      {
        path: 'granting-permissions',
        loadChildren: () => import('../components/granting-permissions/granting-permissions.module').then(fileModule => fileModule.GrantingPermissionsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
