import {Component, OnInit} from "@angular/core";
import {User} from "../../user/model/user-model";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.css"]
})
export class AboutMeComponent implements OnInit {

  author: User = new User();


  constructor() {
    this.author.userDesc = "南京信息工程大学，计算机科学与技术15届毕业生，现就职于银城千万间资产管理有限公司，从事工程系统的开发";
  }

  ngOnInit() {
  }

}
