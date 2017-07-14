import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.routes";
import { PostListComponent } from './post-list/post-list.component';
import {PostListService} from "./post-list/services/post-list.service";
import {CovalentSharedModule} from "../shared/covalent-shared.module";

@NgModule({
  imports: [
    CommonModule,
    CovalentSharedModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostListComponent
  ],
  exports: [
  ],
  providers: [
    PostListService
  ]
})
export class PostModule { }
