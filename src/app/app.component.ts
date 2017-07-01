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

  constructor(
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  openLoginView() {
    const userLoginModelRef = this.modalService.open(UserLoginComponent);
    userLoginModelRef.componentInstance.name = "World";
  }

  openRegisterView() {
    const userRegisterModelRef = this.modalService.open(UserRegisterComponent);
    userRegisterModelRef.componentInstance.name = "World";
  }

}
