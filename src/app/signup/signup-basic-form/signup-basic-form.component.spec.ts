import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBasicFormComponent } from './signup-basic-form.component';

describe('SignupBasicFormComponent', () => {
  let component: SignupBasicFormComponent;
  let fixture: ComponentFixture<SignupBasicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupBasicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
