import {NgModule} from "@angular/core";
import {CommonSharedModule} from "../shared/common-shared.module";
import {MdCardModule} from "@angular/material";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonSharedModule,
    MdCardModule,
    TranslateModule
  ],
  declarations: []
})
export class SitestatModule {
}
