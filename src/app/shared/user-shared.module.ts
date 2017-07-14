import {NgModule} from "@angular/core";
import {UserLoginComponent} from "../user/user-login/user-login.component";
import {UserRegisterComponent} from "../user/user-register/user-register.component";
import {CommonSharedModule} from "./common-shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {MaterialSharedModule} from "./material-shared.module";

@NgModule({
  imports: [
    CommonSharedModule,
    MaterialSharedModule,
    TranslateModule
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
export class UserSharedModule {
}
