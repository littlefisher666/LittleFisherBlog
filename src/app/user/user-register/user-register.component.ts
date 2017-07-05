import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  doRegister() {
    console.log("doRegister");
    this.activeModal.close();
  }

  cancelRegister() {
    this.activeModal.close();
  }

}
