import { OnInit, Injector } from "@angular/core";

import { BaseModel } from "./base-model";
import { BaseService } from "./base-service";
import { BaseSearch } from "./base-search";
import { Router } from "@angular/router";
import { DialogService } from "../modules/dialog/dialog.service";

export abstract class BaseSearchComponent<T extends BaseModel> extends BaseSearch<T> implements OnInit {

    object: T = null;

    protected dialogService: DialogService;
    protected router: Router;

    constructor(
        injector: Injector,
        someService: BaseService<T>
    ) {
        super(someService);

        this.dialogService = injector.get(DialogService);
        this.router = injector.get(Router);
    }

    insert(): void {
        this.router.navigateByUrl(this.router.url + '/-1');
    }

    update(): void {
        if (!this.object) return;
        this.router.navigateByUrl(this.router.url + '/' + this.object.id);
    }

    remove(): void {
        if (!this.object) return;

        this.dialogService.confirm()
            .then(dialog => {
                if (dialog) {
                    this.someService.delete(this.object.id)
                        .then(() => this.search());
                }
            });
    }

    clean(): void {
        this.object = null;
        this.totalElements = 0;
    }

    selectObject(object: any): void {
        this.object = { ...object };
    }

    compare(obj: T, otherObj: T): boolean {
        return obj && otherObj && obj.id == otherObj.id;
    }
}