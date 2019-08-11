import { TranslateService } from '@ngx-translate/core';

export function getLanguage(translate: TranslateService) {
  translate.addLangs(['en', 'pt-BR']);
  translate.setDefaultLang('pt-BR');

  const storedLang = localStorage.getItem('lang');
  if (storedLang) {
    translate.use(storedLang);
  } else {
    localStorage.setItem('lang', translate.getDefaultLang());
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt-BR/) ? browserLang : translate.defaultLang);
  }
}