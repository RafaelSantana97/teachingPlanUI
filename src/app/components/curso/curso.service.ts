import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Curso } from './curso.model';

@Injectable()
export class CursoService extends BaseService<Curso> {

  constructor(http: HttpClient) {
    super(http, 'curso');
  }
}