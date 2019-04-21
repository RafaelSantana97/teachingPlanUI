import { HttpClient } from '@angular/common/http';
import { Domain } from './domain.model';
import { Injectable } from '@angular/core';
import { BaseService } from '../classes-padrao/base-service';

@Injectable()
export class DomainService extends BaseService<Domain> {

    domains: Domain[] = [];

    constructor(http: HttpClient) {
        super(http, "domain");
    }

    loadDomains() {
        this.consultAll()
            .subscribe(domains => {
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