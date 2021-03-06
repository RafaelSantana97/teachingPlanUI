import { Pipe, PipeTransform } from "@angular/core";
import { DomainDataService } from "./domain.data.service";

@Pipe({ name: 'domain' })
export class PipeDomain implements PipeTransform {

  constructor(private domainsService: DomainDataService) { }

  transform(value: string, nameDomain: string) {
    if (!value) return '';
    value = value.toString().toUpperCase();
    nameDomain = nameDomain.toUpperCase();
    const filteredDomains = this.domainsService.consultDomains(nameDomain);

    const domain = filteredDomains.find(dom => dom.abbreviation === value);
    if (domain) return domain.value1;

    return value;
  }
}