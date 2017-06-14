import { Component } from '@angular/core';
import {User} from "./user/model/user-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUser: User;

  constructor() {
    // console.log("什么也没有！");
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

}
