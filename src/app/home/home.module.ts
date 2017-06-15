import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";
import {SitestatComponent} from "../sitestat/sitestat.component";
import { AuthorDescComponent } from './author-desc/author-desc.component';
import {PostSharedModule} from "../shared/post-shared.module";
import { AboutMeComponent } from './about-me/about-me.component';
import { FriendsLinkComponent } from './friends-link/friends-link.component';

@NgModule({
  imports: [
    CommonModule,
    PostSharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent,
    SitestatComponent,
    AuthorDescComponent,
    AboutMeComponent,
    FriendsLinkComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
