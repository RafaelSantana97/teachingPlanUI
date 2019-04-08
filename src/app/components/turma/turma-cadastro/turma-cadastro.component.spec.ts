import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaCadastroComponent } from './turma-cadastro.component';

describe('TurmaCadastroComponent', () => {
  let component: TurmaCadastroComponent;
  let fixture: ComponentFixture<TurmaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
