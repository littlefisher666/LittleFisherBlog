import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";
import {SitestatComponent} from "../sitestat/sitestat.component";
import {AuthorDescComponent} from "./author-desc/author-desc.component";
import {PostSharedModule} from "../shared/post-shared.module";
import {AboutMeComponent} from "./about-me/about-me.component";
import {FriendsLinkComponent} from "./friends-link/friends-link.component";
import {CommonSharedModule} from "../shared/common-shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {MaterialSharedModule} from "../shared/material-shared.module";

@NgModule({
  imports: [
    CommonSharedModule,
    PostSharedModule,
    MaterialSharedModule,
    RouterModule.forChild(homeRoutes),
    TranslateModule
  ],
  declarations: [
    HomeComponent,
    SitestatComponent,
    AuthorDescComponent,
    AboutMeComponent,
    FriendsLinkComponent
  ],
  providers: []
})
export class HomeModule {
}
