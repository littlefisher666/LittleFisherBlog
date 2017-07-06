import { Component, OnInit } from '@angular/core';
import {User} from "../model/user-model";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user: User = new User();

  constructor(
    public activeDialogRef: MdDialogRef<UserRegisterComponent>
  ) { }

  ngOnInit() {
  }

  doRegister() {
    console.log("doRegister");
  }

  cancelRegister() {
    this.activeDialogRef.close();
  }

}
