import { Injectable, Injector } from '@angular/core';

import { BaseService } from '../classes-padrao/base-service';
import { Domain } from './domain.model';
import { tap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

@Injectable()
export class DomainService extends BaseService<Domain> {

    private _domains: Domain[] = [];
    public get domains(): Domain[] {
        if (!this._domains || this._domains.length === 0) {
            this._domains = JSON.parse(localStorage.getItem('domains'));
        }
        return this._domains;
    }
    public set domains(value: Domain[]) {
        this._domains = value;
        localStorage.setItem('domains', JSON.stringify(value));
    }

    constructor(injector: Injector) {
        super(injector, "domain");
    }

    public loadDomains(): void {
        if (this.domains && this._domains.length > 0) return;
        this.consultAll().subscribe(domains => this.domains = domains);
    }

    public consultDomains(desc: string): Domain[] {
        return this.domains.filter(dom => desc === dom.domain);
    }
}