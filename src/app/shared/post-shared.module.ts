import {NgModule} from "@angular/core";
import {PostTagsComponent} from "../post/post-tags/post-tags.component";
import {CommonSharedModule} from "./common-shared.module";
import {MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonSharedModule,
    MdCardModule
  ],
  declarations: [
    PostTagsComponent
  ],
  exports: [
    PostTagsComponent
  ]
})
export class PostSharedModule {
}
