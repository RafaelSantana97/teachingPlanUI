import { Injectable } from '@angular/core';
import { BaseService } from '../shared/classes-padrao/base-service';
import { Login } from './login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService extends BaseService<Login> {

  constructor(http: HttpClient) {
    super(http, 'login');
  }

  logar(conteudo: Login) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
    };

    return new Promise((resolve, reject) => {
      this.httpBase.post<any>(this.urlBase.replace('/api', ''), conteudo, options)
        .toPromise()
        .then(response => {
          if (response.status === 200) {
            let token: string = response.headers.get('Authorization');
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('token', token);

            resolve();
          } else {
            localStorage.setItem('isLoggedin', 'true');

            reject();
          }
        });
    });
  }
}