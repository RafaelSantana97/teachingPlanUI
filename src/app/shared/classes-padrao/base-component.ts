import { Domain } from "../domain/domain.model";

export abstract class BaseComponent<T> {

    descriptionSearch: string = "";
    object: T = null;

    page: number = 0;
    itemsPerPage: number = 10;
    totalElements: number = 0;
    adjacentPages: number = 3;

    emptySearch: boolean = false;

    constructor() { }

    paginate(page: number): void {
        this.page = page - 1;
        this.object = null;
        this.load();
    }

    search(): void {
        this.page = 0;
        this.object = null;
        this.totalElements = 0;
        this.load();
    }

    load() { }

    selectObject(object: any): void {
        this.object = { ...object };
    }

    compare(obj: any, otherObj: any): boolean {
        return obj && otherObj && obj.id == otherObj.id;
    }
}