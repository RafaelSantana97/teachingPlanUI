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
        if (dominioService) this.paginacao = this.dominioService.consultarDominios("ITENS_POR_PAGINA");
    }

    paginar(pagina: number): void {
        this.pagina = pagina - 1;
        this.object = null;
        this.carregar();
    }

    pesquisar(): void {
        this.pagina = 0;
        this.totalRegistro = 0;
        this.carregar();
    }

    limpar(): void {
        this.pesquisaDesc = '';
        this.totalRegistro = 0;
        this.pesquisaVazia = false;
    }

    public abstract carregar(): void;

    selecionarObject(object: any): void {
        this.object = { ...object };
    }
}