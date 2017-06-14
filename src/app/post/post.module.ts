import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.routes";
import {PostComponent} from "./post.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostComponent
  ]
})
export class PostModule { }
