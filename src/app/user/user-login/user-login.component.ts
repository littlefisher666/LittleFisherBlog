import {Component} from '@angular/core';
import {NgbActiveModal, NgbPopoverConfig} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../model/user-model";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [NgbPopoverConfig]
})
export class UserLoginComponent{


  public user: User = new User();

  constructor(
    public activeModal: NgbActiveModal,
    public config: NgbPopoverConfig
  ) {
    config.placement = "left";
  }

  cancelLogin() {
    this.activeModal.close();
  }

  doLogin() {
    // console.log("user: " + JSON.stringify(this.user));
    this.activeModal.close();
  }

}
