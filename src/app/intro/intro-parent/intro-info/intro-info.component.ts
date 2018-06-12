import { Component, OnInit } from '@angular/core';
declare const ga: any;

@Component({
  selector: 'app-intro-info',
  templateUrl: './intro-info.component.html',
  styleUrls: ['./intro-info.component.css']
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }
}
