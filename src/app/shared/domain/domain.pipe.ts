import { Pipe, PipeTransform } from "@angular/core";
import { DomainService } from "./domain.service";

@Pipe({ name: 'domain' })
export class PipeDomain implements PipeTransform {

    constructor(private domainsService: DomainService) { }

    transform(value: string, nameDomain: string) {
        if (!value) return '';
        value = value.toString().toUpperCase();
        nameDomain = nameDomain.toUpperCase();
        let domainsFiltrados = this.domainsService.consultDomains(nameDomain);

        let domain = domainsFiltrados.find(dom => dom.abbreviation === value);
        if (domain) return domain.value1;

        return value;
    }
}