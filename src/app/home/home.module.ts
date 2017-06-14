import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import {SitestatComponent} from "../sitestat/sitestat.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent,
    OnlineContactComponent,
    SocialChannelComponent,
    SitestatComponent
  ],
  providers: []
})
export class HomeModule { }
