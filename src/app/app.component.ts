import {Component, OnInit} from '@angular/core';
import {User} from "./user/model/user-model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentUser: User;
  userLoginDisplay: boolean = false;

  constructor(
    private modalService: NgbModal
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
    this.userLoginDisplay = true;
  }

  openRegisterView() {
    const userRegisterModalProp = {
      size: 'lg' as any
    };
    this.modalService.open(UserRegisterComponent, userRegisterModalProp);
  }

}
