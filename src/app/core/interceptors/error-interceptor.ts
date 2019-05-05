import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { ToastrManager } from 'ng6-toastr-notifications';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class HttpErrorResponseInterceptor implements HttpInterceptor {

    toastrOptions: any = { toastTimeout: 5000, showCloseButton: true, maxShown: 4, position: "bottom-right" };

    constructor(
        private toastr: ToastrManager,
        private spinner: NgxSpinnerService,
        private translate: TranslateService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(evt => {
            if (evt instanceof HttpResponse) {
                if (evt.body) {
                    this.spinner.hide();
                }
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status >= 400 && err.status < 500) {
                    const title: string = this.translate.instant("Error");
                    const message: string = this.translate.instant((err as any).error.message);
                    this.toastr.errorToastr(message, title, this.toastrOptions);
                } else if (err.status == 0) {
                    const title: string = this.translate.instant("Error");
                    const message: string = this.translate.instant("Server not found");
                    this.toastr.errorToastr(message, title, this.toastrOptions);
                }

                this.spinner.hide();
            }
        }));
    }
}