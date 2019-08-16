import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassFormComponent } from './class-form.component';
import { ClassFormModule } from './class-form.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DomainDataService } from 'src/app/shared/domain/domain.data.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ClassFormComponent', () => {
  let component: ClassFormComponent;
  let fixture: ComponentFixture<ClassFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClassFormModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })],
      providers: [
        DomainDataService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should create form`, async(() => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button[type~="submit"]')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it(`form should be invalid`, async(() => {
    component.form.controls['code'].setValue(null);
    component.form.controls['period'].setValue(null);
    component.form.controls['semester'].setValue(null);
    component.form.controls['year'].setValue(null);
    component.form.controls['subject'].setValue({ id: null, name: null });
    component.form.controls['teacher'].setValue({ id: null, name: null, levelDegree: null });
    expect(component.form.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.form.controls['code'].setValue("POO1TIN");
    component.form.controls['period'].setValue(1);
    component.form.controls['semester'].setValue("S1");
    component.form.controls['year'].setValue(2020);
    component.form.controls['subject'].setValue({ id: 1, name: null });
    component.form.controls['teacher'].setValue({ id: 1, name: null, levelDegree: null });
    expect(component.form.valid).toBeTruthy();
  }));

  it(`form.code should not be null`, async(() => {
    component.form.controls['code'].setValue(null);
    expect(component.form.controls['code'].valid).toBeFalsy();
  }));

  it(`form.code should not be greater than 10 chars`, async(() => {
    component.form.controls['code'].setValue("CODIGO_MAIOR_QUE_DEZ_CARACTERES");
    expect(component.form.controls['code'].valid).toBeFalsy();
  }));

  it(`form.period should not be null`, async(() => {
    component.form.controls['period'].setValue(null);
    expect(component.form.controls['period'].valid).toBeFalsy();
  }));

  it(`form.period should not be Minor than 1`, async(() => {
    component.form.controls['period'].setValue(0);
    expect(component.form.controls['period'].valid).toBeFalsy();
  }));

  it(`form.period should not be greater than 3`, async(() => {
    component.form.controls['period'].setValue(4);
    expect(component.form.controls['period'].valid).toBeFalsy();
  }));

  it(`form.semester should not be null`, async(() => {
    component.form.controls['semester'].setValue(null);
    expect(component.form.controls['semester'].valid).toBeFalsy();
  }));

  it(`form.semester should not be null`, async(() => {
    component.form.controls['semester'].setValue(null);
    expect(component.form.controls['semester'].valid).toBeFalsy();
  }));

  it(`form.semester should not be greater than 2 chars`, async(() => {
    component.form.controls['semester'].setValue("S02");
    expect(component.form.controls['semester'].valid).toBeFalsy();
  }));

  it(`form.year should not be null`, async(() => {
    component.form.controls['year'].setValue(null);
    expect(component.form.controls['year'].valid).toBeFalsy();
  }));

  it(`form.year should not be minor than 5 years in the past`, async(() => {
    const currentYear = new Date().getFullYear();

    component.form.controls['year'].setValue(currentYear - 6);
    expect(component.form.controls['year'].valid).toBeFalsy();
  }));

  it(`form.year should not be greater than 5 years in the future`, async(() => {
    const currentYear = new Date().getFullYear();

    component.form.controls['year'].setValue(currentYear + 6);
    expect(component.form.controls['year'].valid).toBeFalsy();
  }));

  it(`form.subject.id should not be null`, async(() => {
    component.form.controls['subject'].setValue({ id: null, name: null });
    expect(component.form.controls['subject'].valid).toBeFalsy();
  }));

  it(`form.teacher.id should not be null`, async(() => {
    component.form.controls['teacher'].setValue({ id: null, name: null, levelDegree: null });
    expect(component.form.controls['teacher'].valid).toBeFalsy();
  }));

});