import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { Dominio } from "../dominio/dominio.model";
import { DominioService } from "../dominio/dominio.service";

export abstract class BasePesquisaModal<T> {

    pesquisaDesc: string = "";
    object: T;

    paginacao: Dominio[] = [];
    pagina: number = 0;
    itensPorPagina: number = 10;
    totalRegistro: number = 0;
    paginasAdjacentes: number = 3;

    pesquisaVazia: boolean = false;

    constructor(
        private activeModal: NgbActiveModal,
        private dominioService?: DominioService
    ) {
        if (dominioService != null) this.paginacao = this.dominioService.consultarDominios("ITENS_POR_PAGINA");
    }

    paginar(pagina: number) {
        this.pagina = pagina - 1;
        this.object = null;
        this.carregar();
    }

    pesquisar() {
        this.pagina = 0;
        this.totalRegistro = 0;
        this.carregar();
    }

    limpar() {
        this.pesquisaDesc = '';
        this.totalRegistro = 0;
        this.pesquisaVazia = false;
    }

    selecionarObject(object: T) {
        this.activeModal.close(object);
    }

    fechar() {
        this.activeModal.dismiss('Cross click');
    }

    public abstract carregar(): void;
}