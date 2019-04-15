import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerService } from './error-handler.service';
import { MyResponseHandlerService } from './my-response-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ErrorHandlerService,
    MyResponseHandlerService
  ]
})
export class CoreModule { }