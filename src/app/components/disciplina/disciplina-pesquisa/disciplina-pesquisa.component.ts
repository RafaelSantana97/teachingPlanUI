import { ErrorHandlerService } from './../../core/error-handler.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Disciplina } from './../disciplina.model';
import { Component, ChangeDetectorRef } from '@angular/core';
import { BaseClassePesquisarModal } from '../../base-classe-pesquisarmodal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { DisciplinaService } from '../disciplina.service';
import { ToastCommunicationService } from '../../toast';

@Component({
  selector: 'app-disciplina-pesquisa',
  templateUrl: './disciplina-pesquisa.component.html',
  styleUrls: ['./disciplina-pesquisa.component.css']
})
export class DisciplinaPesquisaComponent extends BaseClassePesquisarModal {

  disciplinas: Disciplina;

  constructor(
    private activeModal: NgbActiveModal,
    private errorHandler: ErrorHandlerService,
    private changeRef: ChangeDetectorRef,
    private disciplinaService: DisciplinaService,
    private spinner: NgxSpinnerService,
    private toasty: ToastCommunicationService
  ) { super(activeModal, changeRef) }

  pesquisar() {
    this.pagina = 0;
    this.totalRegistro = 0;
    this.carregar(this.qtdPorPagina);
  }

  limpar(): void {
    this.descricao = '';
    this.totalRegistro = 0;
    this.pesquisaVazia = false;
  }

  carregar(fim: number) {
    this.spinner.show();
    this.pesquisaVazia = false;

    this.disciplinaService.consultarIntervaloDescricaoRHNET(this.pagina, fim, this.descricao)
      .subscribe(dados => {
        if (dados.httpStatus === 200) {
          this.disciplinas = dados.object.content;
          this.totalRegistro = dados.object.totalElements;
          this.pesquisaVazia = dados.object.totalElements === 0;
        } else {
          this.toasty.mensagemErroConsulta();
        }

        this.spinner.hide();
      },
        error => {
          this.toasty.newToast("Consulta", this.errorHandler.handle(error).mensagemUsuario, true, 'error');
          this.spinner.hide();
        });
  }
}