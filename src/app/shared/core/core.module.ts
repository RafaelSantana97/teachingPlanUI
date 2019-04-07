import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerService } from './error-handler.service';
import { WebServiceResponseHandlerService } from './web-service-response-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ErrorHandlerService,
    WebServiceResponseHandlerService
  ]
})
export class CoreModule { }