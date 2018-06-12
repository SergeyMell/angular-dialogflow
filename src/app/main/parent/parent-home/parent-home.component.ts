import { Component, OnInit } from '@angular/core';
declare const ga: any;

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }
}
