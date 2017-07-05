import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserSharedModule} from "./shared/user-shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {CommonSharedModule} from "./shared/common-shared.module";
import {DialogModule} from "primeng/primeng";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonSharedModule,
    HttpModule,
    UserSharedModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    DialogModule
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
export class AppModule { }
