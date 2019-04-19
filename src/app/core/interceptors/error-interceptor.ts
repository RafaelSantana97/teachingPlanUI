import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

// import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrManager } from 'ng6-toastr-notifications';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HttpErrorResponseInterceptor implements HttpInterceptor {

    // @BlockUI() blockUI: NgBlockUI;
    toastrOptions: any = { toastTimeout: 5000, showCloseButton: true, maxShown: 4, position: "bottom-right" };

    constructor(
        private toastr: ToastrManager,
        private translate: TranslateService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(evt => {
            if (evt instanceof HttpResponse) {
                if (evt.body) {
                    //If blockUI is implemented, delete the 'comment lines' and this will work.
                    // this.blockUI.stop();
                }
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status == 401) {

                }
                else {
                    let title: string = this.translate.instant("Error");
                    let message: string = this.translate.instant((err as any).error.message);
                    this.toastr.errorToastr(message, title, this.toastrOptions);
                }
            }
        }));
    }
}