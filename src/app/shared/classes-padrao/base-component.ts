import { OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";

import { BaseModel } from "./base-model";

export abstract class BaseComponent<T extends BaseModel> implements OnInit {

    form = new FormGroup({
        descriptionSearch: new FormControl()
    });

    object: T = null;

    page: number = 0;
    itemsPerPage: number = 10;
    totalElements: number = 0;
    adjacentPages: number = 3;

    emptySearch: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.search();
        this.searchDebounce();
    }

    searchDebounce() {
        this.form.get("descriptionSearch").valueChanges.pipe(
            debounceTime(500),
            map((search: string) => { return search.trim() }),
            distinctUntilChanged()
        ).subscribe(() => this.search());
    }

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

    compare(obj: T, otherObj: T): boolean {
        return obj && otherObj && obj.id == otherObj.id;
    }
}