import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {User} from "./user/model/user-model";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {TdDialogService} from "@covalent/core";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentUser: User;

  constructor(
    private dialogService: TdDialogService,
    private viewContainerRef: ViewContainerRef,
    private translate: TranslateService
  ) {
    // 添加语言支持
    translate.addLangs(['zh-CN', 'en']);
    // 设置默认语言，一般在无法匹配的时候使用
    translate.setDefaultLang('zh-CN');
    // 获取当前浏览器环境的语言比如en、zh
    let broswerLang = translate.getBrowserLang();
    // 使用语言
    translate.use(broswerLang.match(/en|zh-CN/) ? broswerLang : 'zh-CN');
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  openLoginView() {
    const userLoginDialogProp = {
      disableClose: false,
      viewContainerRef: this.viewContainerRef,
      width: '400px',
      position: {
        top: '100px',
      }
    };
    const dialogRef = this.dialogService.open(UserLoginComponent, userLoginDialogProp);
    dialogRef.afterClosed().subscribe(result =>
    {
      this.currentUser = result;
      // console.log(this.currentUser);
    });
  }

  openRegisterView() {
    const userRegisterDialogProp = {
      disableClose: true,
      viewContainerRef: this.viewContainerRef,
      width: '700px',
      position: {
        top: '100px'
      }
    }
    this.dialogService.open(UserRegisterComponent, userRegisterDialogProp);
  }

}
