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

    carregarDomains() {
        this.consultarTudo()
            .subscribe(domains => {
                this.domains = this.domains.concat(domains);
            });
    }

    consultarDomains(desc: string): Domain[] {
        return this.domains.filter(dom => desc === dom.domain);
    }

    consultarDomainsInvert(desc: string, classe: string): Domain {
        return this.domains.
            find(dom => desc === dom.value1 && classe === dom.domain);
    }

    consultarDomainsOrdenadoPorabbreviation(desc: string): Domain[] {
        return this.consultarDomains(desc).sort((n1, n2) => <any>n1.abbreviation - <any>n2.abbreviation);
    }

    consultarDomainsOrdenadoPorMinimo(desc: string): Domain[] {
        return this.consultarDomains(desc).sort((n1, n2) => <any>n1.value1 - <any>n2.value1);
    }

    consultarDomainsOrdenadoPorMaximo(desc: string): Domain[] {
        return this.consultarDomains(desc).sort((n1, n2) => <any>n1.value2 - <any>n2.value2);
    }
}