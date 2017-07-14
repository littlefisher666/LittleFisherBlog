import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Http, HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserSharedModule} from "./shared/user-shared.module";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {CommonSharedModule} from "./shared/common-shared.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {CovalentSharedModule} from "./shared/covalent-shared.module";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonSharedModule,
    HttpModule,
    UserSharedModule,
    RouterModule.forRoot(appRoutes),
    CovalentSharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
