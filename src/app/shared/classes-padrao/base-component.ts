import { Dominio } from "../dominio/dominio.model";
import { DominioService } from "../dominio/dominio.service";

export abstract class BaseComponent<T> {

    pesquisaDesc: string = "";
    object: T;

    paginacao: Dominio[] = [];
    pagina: number = 0;
    itensPorPagina: number = 10;
    totalRegistro: number = 0;
    paginasAdjacentes: number = 3;

    pesquisaVazia: boolean = false;

    constructor(
        private dominioService?: DominioService
    ) {
        if (dominioService != null) this.paginacao = this.dominioService.consultarDominios("ITENS_POR_PAGINA");
    }

    selecionarObject(object: any) {
        this.object = { ...object }
    }
}