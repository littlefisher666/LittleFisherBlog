import { NgModule } from '@angular/core';
import {UserLoginComponent} from "../user/user-login/user-login.component";
import {UserRegisterComponent} from "../user/user-register/user-register.component";
import {CommonSharedModule} from "./common-shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ButtonModule, InputTextModule} from "primeng/primeng";

@NgModule({
  imports: [
    CommonSharedModule,
    NgbModule,
    ButtonModule,
    InputTextModule
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
