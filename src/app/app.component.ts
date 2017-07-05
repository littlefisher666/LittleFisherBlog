import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {User} from "./user/model/user-model";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {TdDialogService} from "@covalent/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentUser: User;

  constructor(
    private dialogService: TdDialogService,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  openLoginView() {
    // const userLoginModalProp = {
    //   size: 'lg' as any
    // };
    // this.modalService.open(UserLoginComponent, userLoginModalProp);
    const userLoginDialogProp = {
      disableClose: false,
      viewContainerRef: this.viewContainerRef,
      width: '400px',
      position: {
        top: '100px',
      }
    };
    this.dialogService.open(UserLoginComponent, userLoginDialogProp);
  }

  openRegisterView() {
    // const userRegisterModalProp = {
    //   size: 'lg' as any
    // };
    // this.modalService.open(UserRegisterComponent, userRegisterModalProp);
  }

}
