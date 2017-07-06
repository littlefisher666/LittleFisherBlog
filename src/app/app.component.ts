import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {User} from "./user/model/user-model";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {TdDialogService} from "@covalent/core";
import {UserRegisterComponent} from "./user/user-register/user-register.component";

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
    const userRegisterDialogProp = {
      disableClose: false,
      viewContainerRef: this.viewContainerRef,
      width: '400px',
      position: {
        top: '100px'
      }
    }
    this.dialogService.open(UserRegisterComponent, userRegisterDialogProp);
  }

}
