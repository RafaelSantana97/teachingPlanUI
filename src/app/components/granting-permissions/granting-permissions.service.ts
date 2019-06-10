import { Injectable, Injector } from '@angular/core';

import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { GrantingPermissions } from './granting-permissions.model';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/core/my-response.model';

@Injectable()
export class GrantingPermissionsService extends BaseService<GrantingPermissions> {

  constructor(injector: Injector) {
    super(injector, 'user');
  }

  consultIntervalDescription(page: number, count: number, description?: string): Observable<Pagination<GrantingPermissions>> {
    const observable = this.httpBase.get<GrantingPermissions[]>(this.urlBase + "/interval/" + page + "/" + count + "/requiredPermissionsUsers", this.httpOtions);
    return this.getHandledObservable(observable);
  }

  grantPermissionToUser(user: GrantingPermissions): Observable<GrantingPermissions> {
    const observable = this.httpBase.post<GrantingPermissions>(this.urlBase + "/grantAllRequiredPermissions", user, this.httpOtions);
    return this.getHandledObservable(observable);
  }
}