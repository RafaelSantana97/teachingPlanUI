import { Component, Injector } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

import { BaseSearchComponent } from 'src/app/shared/base-classes/base-search-component';
import { GrantingPermissions } from './granting-permissions.model';
import { GrantingPermissionsDataService } from './granting-permissions.data.service';

@Component({
  selector: 'tp-granting-permissions',
  templateUrl: './granting-permissions.component.html',
  styleUrls: ['./granting-permissions.component.scss'],
  animations: [routerTransition()]
})
export class GrantingPermissionsComponent extends BaseSearchComponent<GrantingPermissions> {

  constructor(
    injector: Injector,
    private grantingPermissionsDataService: GrantingPermissionsDataService
  ) { super(injector, grantingPermissionsDataService); }

  save(user: GrantingPermissions): void {
    this.grantingPermissionsDataService.grantPermissionToUser(user)
      .subscribe(() => { this.search(); });
  }

  handleSwitch(role: string, roles: Array<string>): void {
    const checked = roles.includes(role);
    if (checked) {
      roles = roles.filter(r => r !== role);
    } else {
      roles.push(role);
    }
  }
}