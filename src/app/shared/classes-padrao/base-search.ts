import { OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";

import { BaseModel } from "./base-model";
import { BaseService } from "./base-service";

export abstract class BaseSearch<T extends BaseModel> implements OnInit {

    form = new FormGroup({
        descriptionSearch: new FormControl()
    });

    items: T[] = [];

    page: number = 1;
    itemsPerPage: number = 10;
    totalElements: number = 0;
    adjacentPages: number = 3;

    emptySearch: boolean = false;

    constructor(
        protected someService: BaseService<T>
    ) { }

    ngOnInit(): void {
        this.search();
        this.searchDebounce();
    }

    searchDebounce(): void {
        this.form.get("descriptionSearch").valueChanges.pipe(
            debounceTime(500),
            map((search: string) => { return search.trim() }),
            distinctUntilChanged()
        ).subscribe(() => this.search());
    }

    search(): void {
        this.clean();
        this.load();
    }

    clean(): void {
        this.totalElements = 0;
    }

    load(): void {
        this.emptySearch = false;

        this.someService.consultIntervalDescription(this.page - 1, this.itemsPerPage, this.form.get("descriptionSearch").value)
            .then(items => {
                this.items = items.content;
                this.totalElements = items.totalElements;
                this.emptySearch = items.totalElements === 0;
            });
    }
}