import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(fileModule => fileModule.LayoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(fileModule => fileModule.SignupModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(fileModule => fileModule.LoginModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./server-error/server-error.module').then(fileModule => fileModule.ServerErrorModule)
  },
  {
    path: 'access-denied',
    loadChildren: () => import('./access-denied/access-denied.module').then(fileModule => fileModule.AccessDeniedModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(fileModule => fileModule.NotFoundModule)
  },
  {
    path: 'wait-for-approval',
    loadChildren: () => import('./wait-for-approval/wait-for-approval.module').then(fileModule => fileModule.WaitForApprovalModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }