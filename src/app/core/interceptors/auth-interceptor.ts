import { AuthService } from '../authentication/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const url = req.url.split('/');

        if (url[1] !== 'auth' && url[1] !== 'externalauth') {

            const authToken = this._authService.getAccessToken();

            req = req.clone({
                headers: req.headers.set('Authorization', authToken)
            });
        }
        return next.handle(req);

    }
}