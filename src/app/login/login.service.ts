import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";

import { BaseService } from "../shared/base-classes/base-service";
import { Login } from "./login.model";
import { AuthService } from "../core/authentication/auth.service";
import { filter, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class LoginService extends BaseService<Login> {

  constructor(
    injector: Injector,
    private _authService: AuthService,
  ) { super(injector, "login"); }

  login(content: Login): Observable<any> {
    this.spinner.show();

    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      observe: "response" as "body", // to display the full response & as "body" for type cast
    };

    const url = this.urlBase.replace("/api", "");

    return this.httpBase.post<any>(url, content, options)
      .pipe(
        tap(() => this.spinner.hide()),
        filter(response => {
          if (response.status === 200) {
            return response;
          } else {
            localStorage.removeItem("isLoggedin");
          }
        }),
        tap(response => {
          const token: string = response.headers.get("Authorization");
          this._authService.setAccessToken(token);
          localStorage.setItem("isLoggedin", "true");
        }));
  }
}