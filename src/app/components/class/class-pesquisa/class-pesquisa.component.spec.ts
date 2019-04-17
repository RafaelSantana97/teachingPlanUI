import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPesquisaComponent } from './class-pesquisa.component';

describe('ClassPesquisaComponent', () => {
  let component: ClassPesquisaComponent;
  let fixture: ComponentFixture<ClassPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassPesquisaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
