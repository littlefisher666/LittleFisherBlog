import { NgModule } from '@angular/core';
import {CovalentDialogsModule, CovalentPagingModule} from "@covalent/core";

@NgModule({
  imports: [
    CovalentPagingModule,
    CovalentDialogsModule
  ],
  exports: [
    CovalentPagingModule,
    CovalentDialogsModule
  ],
  declarations: []
})
export class CovalentSharedModule { }
