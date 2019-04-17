import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { CoursePesquisaComponent } from './course-pesquisa.component';
import { CoursePesquisaService } from './course-pesquisa.service';
import { CourseService } from '../course.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    TranslateModule,
  ],
  declarations: [
    CoursePesquisaComponent,
  ],
  providers: [
    CourseService,
    CoursePesquisaService
  ],
  entryComponents: [
    CoursePesquisaComponent
  ]
}) export class CoursePesquisaModule { }