import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'course', loadChildren: '../components/course/course.module#CourseModule' },
      { path: 'class', loadChildren: '../components/class/class.module#ClassModule' },
      { path: 'subject', loadChildren: '../components/subject/subject.module#SubjectModule' },
      { path: 'granting-permissions', loadChildren: '../components/granting-permissions/granting-permissions.module#GrantingPermissionsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
