import { NgModule } from '@angular/core';
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdDialogModule, MdInputModule} from "@angular/material";

@NgModule({
  imports: [
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MdDialogModule,
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MdDialogModule,
  ],
  declarations: []
})
export class MaterialSharedModule { }
