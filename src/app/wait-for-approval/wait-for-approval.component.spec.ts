import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitForApprovalComponent } from './wait-for-approval.component';
import { WaitForApprovalModule } from './wait-for-approval.module';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WaitForApprovalComponent', () => {
  let component: WaitForApprovalComponent;
  let fixture: ComponentFixture<WaitForApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WaitForApprovalModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
