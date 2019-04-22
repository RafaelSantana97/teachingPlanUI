import { Injectable, Injector } from '@angular/core';

import { BaseService } from '../classes-padrao/base-service';
import { Domain } from './domain.model';

@Injectable()
export class DomainService extends BaseService<Domain> {

    domains: Domain[] = [];

    constructor(injector: Injector) {
        super(injector, "domain");
    }

    loadDomains() {
        this.consultAll()
            .then(domains => {
                this.domains = this.domains.concat(domains);
            });
    }

    consultDomains(desc: string): Domain[] {
        return this.domains.filter(dom => desc === dom.domain);
    }

    consultDomainsInvert(desc: string, classe: string): Domain {
        return this.domains.
            find(dom => desc === dom.value1 && classe === dom.domain);
    }

    consultDomainsOrderByAbbreviation(desc: string): Domain[] {
        return this.consultDomains(desc).sort((n1, n2) => <any>n1.abbreviation - <any>n2.abbreviation);
    }

    consultDomainsOrderByMin(desc: string): Domain[] {
        return this.consultDomains(desc).sort((n1, n2) => <any>n1.value1 - <any>n2.value1);
    }

    consultDomainsOrderByMax(desc: string): Domain[] {
        return this.consultDomains(desc).sort((n1, n2) => <any>n1.value2 - <any>n2.value2);
    }
}