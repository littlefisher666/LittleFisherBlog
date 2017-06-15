import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-desc',
  templateUrl: './author-desc.component.html',
  styleUrls: ['author-desc.component.scss']
})
export class AuthorDescComponent implements OnInit {

  public currentDate: Date = new Date();

  constructor() {
    window.setInterval(() => this.currentDate = new Date(), 1000);
  }

  ngOnInit() {
  }

}
