import {Component} from '@angular/core';
import {User} from "../model/user-model";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent{

  public user: User = new User();

  constructor(
    // public activeModal: NgbActiveModal,
    // public config: NgbPopoverConfig
    public activeDialogRef: MdDialogRef<UserLoginComponent>
  ) {
    // config.placement = "left";
  }

  cancelLogin() {
    this.activeDialogRef.close();
  }

  doLogin() {
    this.activeDialogRef.close(this.user);
  }

}
