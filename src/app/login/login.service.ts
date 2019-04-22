import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { BaseService } from '../shared/classes-padrao/base-service';
import { Login } from './login.model';
import { AuthService } from '../core/authentication/auth.service';

@Injectable()
export class LoginService extends BaseService<Login> {

  constructor(
    injector: Injector,
    private _authService: AuthService
  ) {
    super(injector, 'login');
  }

  logar(content: Login) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
    };

    return new Promise((resolve, reject) => {
      this.spinner.show();
      this.httpBase.post<any>(this.urlBase.replace('/api', ''), content, options)
        .toPromise()
        .then(response => {
          this.spinner.hide();
          if (response.status === 200) {
            let token: string = response.headers.get('Authorization');

            this._authService.setAccessToken(token);
            localStorage.setItem('isLoggedin', 'true');

            resolve();
          } else {
            localStorage.removeItem('isLoggedin');

            reject();
          }
        });
    });
  }
}