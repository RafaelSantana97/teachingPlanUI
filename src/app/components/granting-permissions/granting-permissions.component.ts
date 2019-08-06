import { Component, Injector } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

import { BaseSearchComponent } from 'src/app/shared/base-classes/base-search-component';
import { GrantingPermissions } from './granting-permissions.model';
import { GrantingPermissionsService } from './granting-permissions.service';

@Component({
  selector: 'tp-granting-permissions',
  templateUrl: './granting-permissions.component.html',
  styleUrls: ['./granting-permissions.component.scss'],
  animations: [routerTransition()]
})
export class GrantingPermissionsComponent extends BaseSearchComponent<GrantingPermissions> {

  constructor(
    injector: Injector,
    private grantingPermissionsService: GrantingPermissionsService
  ) { super(injector, grantingPermissionsService) }

  save(user: GrantingPermissions): void {
    this.grantingPermissionsService.grantPermissionToUser(user)
      .subscribe(() => { this.search(); });
  }
}