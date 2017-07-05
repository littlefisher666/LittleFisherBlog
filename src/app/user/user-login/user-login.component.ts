import {Component} from '@angular/core';
// import {NgbActiveModal, NgbPopoverConfig} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../model/user-model";
import {ITdDynamicElementConfig, TdDynamicElement} from "@covalent/dynamic-forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  // providers: [NgbPopoverConfig]
})
export class UserLoginComponent{

  elements: ITdDynamicElementConfig[] = [{
    name: 'input-acc-nbr',
    type: TdDynamicElement.Input,
    label: '用户名',
    required: true
  }, {
    name: 'input-password',
    type: TdDynamicElement.Password,
    label: '密码',
    required: true
  }, {
    name: 'input-qq',
    type: TdDynamicElement.Input,
    label: 'QQ',
    required: false
  }];

  public user: User = new User();

  constructor(
    // public activeModal: NgbActiveModal,
    // public config: NgbPopoverConfig
  ) {
    // config.placement = "left";
  }

  cancelLogin() {
    // this.activeModal.close();
  }

  doLogin() {
    // console.log("user: " + JSON.stringify(this.user));
    // this.activeModal.close();
  }

}
