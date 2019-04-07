import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Disciplina } from './disciplina.model';

@Injectable()
export class DisciplinaService extends BaseService<Disciplina> {

  constructor(http: HttpClient) {
    super(http, 'disciplina');
  }
}