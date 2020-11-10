import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { ToastrService, IndividualConfig } from "ngx-toastr";
import { TranslateService } from "@ngx-translate/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Injectable()
export class HttpErrorResponseInterceptor implements HttpInterceptor {
  private readonly _toastrOptions: Partial<IndividualConfig> = {
    timeOut: 6000,
    closeButton: true
  };

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        evt => {
          if (evt instanceof HttpResponse) {
            if (evt.body) {
              this.spinner.hide();
            }
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if ((err as any).error.message === "Please, wait for approval") {
              this.router.navigate(["/wait-for-approval"]);
            } else if (err.status >= 400 && err.status <= 499) {
              this.handleClientError(err);
            } else if (err.status >= 500 && err.status <= 599) {
              this.handleServerError(err);
            } else if (err.status == 0) {
              this.handleNoServerError(err);
            }

            this.spinner.hide();
          }
        }
      )
    );
  }

  private handleClientError(response: HttpErrorResponse): HttpErrorResponse {
    const title: string = this.translate.instant("Error");
    const message: string = this.translate.instant(response.error.message);
    this.toastr.error(message, title, this._toastrOptions);

    return response;
  }

  private handleServerError(response: HttpErrorResponse): HttpErrorResponse {
    const title: string = this.translate.instant("Error");
    const message: string = this.translate.instant(response.error.message);
    this.toastr.error(message, title, this._toastrOptions);

    return response;
  }

  private handleNoServerError(response: HttpErrorResponse): HttpErrorResponse {
    const title: string = this.translate.instant("Error");
    const message: string = this.translate.instant("Server not found");
    this.toastr.error(message, title, this._toastrOptions);

    return response;
  }
}