import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth-interceptor';
import { HttpErrorResponseInterceptor } from './error-interceptor';
import { RouterModule } from '@angular/router';

/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorResponseInterceptor, multi: true },
  { provide: RouterModule }
];