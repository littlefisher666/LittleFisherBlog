import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post-model";
import {PostListService} from "./services/post-list.service";
import {IPageChangeEvent} from "@covalent/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Array<Post>;

  event: IPageChangeEvent;
  firstLast: boolean = false;
  pageSizeAll: boolean = false;

  constructor(public postListService: PostListService) {
  }

  change(event: IPageChangeEvent): void {
    this.event = event;
  }

  toggleFirstLast(): void {
    this.firstLast = !this.firstLast;
  }

  ngOnInit() {
    this.postListService.getPostList()
      .subscribe(res => {
        this.postList = res["list"];
      });
  }

}
