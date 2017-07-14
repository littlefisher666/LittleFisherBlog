import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-desc',
  templateUrl: './author-desc.component.html',
  styleUrls: ['author-desc.component.scss']
})
export class AuthorDescComponent implements OnInit {

  authorName: string = "LittleFisher";
  authorSubtitle: string = "让优秀成为一种习惯";
  menuList: string[] = ["技术文档", "心历路程"];

  constructor() {
  }

  ngOnInit() {
  }

}
