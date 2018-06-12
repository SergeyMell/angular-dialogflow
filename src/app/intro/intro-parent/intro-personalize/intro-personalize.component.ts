import { Component, OnInit } from '@angular/core';
declare const ga: any;

@Component({
  selector: 'app-intro-personalize',
  templateUrl: './intro-personalize.component.html',
  styleUrls: ['./intro-personalize.component.css']
})
export class PersonalizeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }
}
