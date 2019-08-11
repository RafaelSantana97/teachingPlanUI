import { debounceTime, map, distinctUntilChanged, takeUntil, filter } from "rxjs/operators";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { OnInit, OnDestroy } from "@angular/core";

import { BaseModel } from "./base-model";
import { BaseDataService } from "./base-data-service";
import { Pagination } from "src/app/core/my-response.model";

export abstract class BaseSearch<T extends BaseModel> implements OnInit, OnDestroy {

  form = new FormGroup({
    descriptionSearch: new FormControl()
  });

  items$ = new Observable<Pagination<T>>();
  itemsPerPage: number = 10;

  private unsubscribeFromDebounceSearch$ = new Subject();

  constructor(
    protected someService: BaseDataService<T>
  ) { }

  ngOnInit(): void {
    this.search();
    this.searchDebounce();
  }

  searchDebounce(): void {
    this.form.get("descriptionSearch").valueChanges.pipe(
      debounceTime(500),
      map((search: string) => { return search.trim() }),
      filter((search: string) => search.length > 2),
      distinctUntilChanged(),
      takeUntil(this.unsubscribeFromDebounceSearch$)
    ).subscribe(() => this.search());
  }

  search(page: number = 0): void {
    this.clean();
    this.load(page);
  }

  clean(): void { }

  load(page: number): void {
    this.items$ = this.someService
      .consultIntervalDescription(page, this.itemsPerPage, this.form.get("descriptionSearch").value);
  }

  ngOnDestroy(): void {
    this.unsubscribeFromDebounceSearch$.next();
    this.unsubscribeFromDebounceSearch$.unsubscribe();
  }
}