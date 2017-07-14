import {Component, OnInit} from "@angular/core";
import {FriendLink} from "./model/friend-link-model";

@Component({
  selector: "app-friends-link",
  templateUrl: "./friends-link.component.html",
  styleUrls: ["./friends-link.component.css"]
})
export class FriendsLinkComponent implements OnInit {

  friendLinkList: FriendLink[] = [];

  constructor() {
    const friendLink1: FriendLink = new FriendLink();
    friendLink1.friendName = "张三";
    friendLink1.webUrl = "http://www.baidu.com";
    const friendLink2: FriendLink = new FriendLink();
    friendLink2.friendName = "李四";
    friendLink2.webUrl = "http://www.qq.com";
    this.friendLinkList.push(friendLink1, friendLink2);
  }

  ngOnInit() {
  }

}
