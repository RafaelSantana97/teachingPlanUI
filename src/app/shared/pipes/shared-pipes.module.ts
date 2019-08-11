import { NgModule } from '@angular/core';
import { PipeDomain } from '../domain/domain.pipe';
import { PipeSubject } from './subject.pipe';
import { PipeUser } from './user.pipe';

@NgModule({
  declarations: [
    PipeSubject,
    PipeDomain,
    PipeUser
  ],
  exports: [
    PipeSubject,
    PipeDomain,
    PipeUser
  ]
})
export class SharedPipesModule { }