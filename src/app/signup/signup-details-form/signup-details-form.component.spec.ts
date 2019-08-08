import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDetailsFormComponent } from './signup-details-form.component';

describe('SignupDetailsFormComponent', () => {
  let component: SignupDetailsFormComponent;
  let fixture: ComponentFixture<SignupDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
