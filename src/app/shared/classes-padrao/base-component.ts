import { Domain } from "../domain/domain.model";

export abstract class BaseComponent<T> {

    pesquisaDesc: string = "";
    object: T = null;

    paginacao: Domain[] = [];
    pagina: number = 0;
    itensPorPagina: number = 10;
    totalRegistro: number = 0;
    paginasAdjacentes: number = 3;

    pesquisaVazia: boolean = false;

    constructor() { }

    paginar(pagina: number): void {
        this.pagina = pagina - 1;
        this.object = null;
        this.carregar();
    }

    pesquisar(): void {
        this.pagina = 0;
        this.object = null;
        this.totalRegistro = 0;
        this.carregar();
    }

    carregar() { }

    selecionarObject(object: any): void {
        this.object = { ...object };
    }

    compare(obj: any, otherObj: any): boolean {
        return obj && otherObj && obj.id == otherObj.id;
    }
}