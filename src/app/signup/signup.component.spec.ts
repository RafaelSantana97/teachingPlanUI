import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignupComponent } from './signup.component';
import { SignupModule } from './signup.module';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DomainDataService } from '../shared/domain/domain.data.service';
import { AuthService } from '../core/authentication/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SignupModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ],
      providers: [
        DomainDataService,
        AuthService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`should create form`, async(() => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
  }));

  it(`LevelsDegree shouldn't be null`, async(() => {
    component.ngOnInit();
    expect(component.levelsDegree).toBeDefined();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button[type~="submit"]')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it(`should call the back method`, async(() => {
    spyOn(component, 'back');
    el = fixture.debugElement.query(By.css('button[type~="button"]')).nativeElement;
    el.click();
    expect(component.back).toHaveBeenCalled();
  }));

  it(`form should be invalid 1`, async(() => {
    component.form.controls['name'].setValue('');
    component.form.controls['email'].setValue('');
    component.form.controls['password'].setValue('');
    component.form.controls['passwordConfirmation'].setValue('');
    component.form.controls['levelDegree'].setValue('');
    component.form.controls['requireAdminRole'].setValue(undefined);
    component.form.controls['requireTeacherRole'].setValue(undefined);
    component.form.controls['requireCoordinatorRole'].setValue(undefined);
    expect(component.form.valid).toBeFalsy();
  }));

  it(`form should be invalid 2`, async(() => {
    component.form.controls['name'].setValue('John of Silva');
    component.form.controls['email'].setValue('jh.silva@');
    component.form.controls['password'].setValue('123');
    component.form.controls['passwordConfirmation'].setValue('1234');
    component.form.controls['levelDegree'].setValue('');
    component.form.controls['requireAdminRole'].setValue(false);
    component.form.controls['requireTeacherRole'].setValue(false);
    component.form.controls['requireCoordinatorRole'].setValue(false);
    expect(component.form.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.form.controls['name'].setValue('John of Silva');
    component.form.controls['email'].setValue('jh.silva@host.com');
    component.form.controls['password'].setValue('1234');
    component.form.controls['passwordConfirmation'].setValue('1234');
    component.form.controls['levelDegree'].setValue('');
    component.form.controls['requireAdminRole'].setValue(false);
    component.form.controls['requireTeacherRole'].setValue(true);
    component.form.controls['requireCoordinatorRole'].setValue(false);
    expect(component.form.valid).toBeTruthy();
  }));
});
