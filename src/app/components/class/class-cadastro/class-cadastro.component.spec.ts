import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCadastroComponent } from './class-cadastro.component';

describe('ClassCadastroComponent', () => {
  let component: ClassCadastroComponent;
  let fixture: ComponentFixture<ClassCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassCadastroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
