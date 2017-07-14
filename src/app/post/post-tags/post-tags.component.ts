import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-tags',
  templateUrl: './post-tags.component.html',
  styleUrls: ['post-tags.component.scss']
})
export class PostTagsComponent implements OnInit {

  tagList: string[] = ["AOP", "Activiti", "Angular2", "Bean"];

  constructor() { }

  ngOnInit() {
  }

}
