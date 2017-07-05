import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLoginComponent} from "../user/user-login/user-login.component";
import {UserRegisterComponent} from "../user/user-register/user-register.component";
import {CommonSharedModule} from "./common-shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonSharedModule,
    NgbModule,
  ],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  exports: [
    UserLoginComponent,
    UserRegisterComponent
  ]
})
export class UserSharedModule { }
