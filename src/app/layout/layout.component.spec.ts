import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

import { LayoutComponent } from './layout.component';
import { LayoutModule } from './layout.module';
import { DomainDataService } from '../shared/domain/domain.data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PermissionModule } from '../core/manager/permission.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          LayoutModule,
          RouterTestingModule,
          HttpClientTestingModule,
          PermissionModule,
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useClass: TranslateFakeLoader
            }
          }),
        ],
        providers: [
          DomainDataService
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
