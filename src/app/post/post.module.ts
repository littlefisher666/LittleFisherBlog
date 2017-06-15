import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.routes";
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostListComponent
  ],
  exports: [
  ]
})
export class PostModule { }
