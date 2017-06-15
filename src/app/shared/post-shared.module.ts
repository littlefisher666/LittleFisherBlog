import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostTagsComponent} from "../post/post-tags/post-tags.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      PostTagsComponent
  ],
  exports: [
      PostTagsComponent
  ]
})
export class PostSharedModule { }
