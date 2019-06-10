import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrantingPermissionsComponent } from './granting-permissions.component';

const routes: Routes = [
    {
        path: '',
        component: GrantingPermissionsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrantingPermissionsRoutingModule { }