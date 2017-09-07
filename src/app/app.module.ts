import { LeftColComponent } from './left-col/left-col.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonSharedModule } from "./shared/common-shared.module";
import { HomeComponent } from './home/home.component';
import { RightColComponent } from './right-col/right-col.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftColComponent,
    RightColComponent

  ],
  imports: [
    BrowserModule,
    CommonSharedModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
