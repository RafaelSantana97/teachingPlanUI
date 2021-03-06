import { OnInit, Injector, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { BaseModel } from "./base-model";
import { BaseDataService } from "./base-data-service";
import { BaseSearch } from "./base-search";
import { DialogService } from "../modules/dialog/dialog.service";

export abstract class BaseSearchComponent<T extends BaseModel> extends BaseSearch<T> implements OnInit, OnDestroy {

  object: T = null;

  protected dialogService: DialogService;
  protected router: Router;

  private unsubscribeFromDelete$ = new Subject();

  constructor(
    injector: Injector,
    someService: BaseDataService<T>
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
            .pipe(takeUntil(this.unsubscribeFromDelete$))
            .subscribe(() => this.search());
        }
      });
  }

  clean(): void {
    this.object = null;
  }

  selectObject(object: any): void {
    this.object = { ...object };
  }

  compare(obj: T, otherObj: T): boolean {
    return obj && otherObj && obj.id == otherObj.id;
  }

  ngOnDestroy(): void {
    this.unsubscribeFromDelete$.next();
    this.unsubscribeFromDelete$.unsubscribe();
  }
}