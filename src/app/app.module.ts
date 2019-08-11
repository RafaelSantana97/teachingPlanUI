import { PermissionModule } from "./core/manager/permission.module";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared";
import { DomainDataService } from "./shared/domain/domain.data.service";
import { CoreModule } from "./core/core.module";
import { AuthService } from "./core/authentication/auth.service";
import { ToastrModule } from "ngx-toastr";

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
};

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    CoreModule,
    HttpClientModule,
    PermissionModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      maxOpened: 5,
      timeOut: 4000,
      autoDismiss: true,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [AppComponent],
  providers: [AuthGuard, AuthService, DomainDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
