import { Dominio } from './dominios-rhnet/dominios.model';
import { DominioService } from './dominios-rhnet/dominios-rhnet.service';
import { ChangeDetectorRef } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";

export abstract class BaseClassePesquisarModal {

    tituloModal: string;
    descricao: string = "";
    object: any;
    pagina = 0;
    itensPorPagina: number = 10;
    totalRegistro: number = 0;

    pesquisaVazia: boolean = false;

    paginacao: Dominio[] = [];
    paginasAdjacentes: number = 3;

    constructor(
        private aModel: NgbActiveModal,
        private cRef: ChangeDetectorRef,
        private dominioService?: DominioService
    ) {
        if (dominioService != null) this.paginacao = this.dominioService.consultarDominios("ITENS_POR_PAGINA");
    }

    selecionar(codigo: number) {
        this.aModel.close(codigo);
    }

    selecionarObject(object: any) {
        this.aModel.close(object);
    }

    limpar(): void {
        this.aModel.close(-1);
    }

    fechar() {
        this.aModel.dismiss('Cross click');
    }

    paginar($event: any) {
        this.pagina = $event - 1;
        this.carregar(this.qtdPorPagina);
    }

    public abstract pesquisar(): void;
    public abstract carregar(qtdPorPagina: number): void;

    calcularDia(dataInicio: Date, dataTermino: Date) {
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return Math.round(Math.abs((dataInicio.getTime() - dataTermino.getTime()) / (oneDay)));
    }
}