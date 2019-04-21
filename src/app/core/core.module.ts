import { NgModule } from '@angular/core';
import { HttpInterceptorProviders } from './interceptors';

@NgModule({
  providers: [HttpInterceptorProviders]
})
export class CoreModule { }