import { Component, OnInit } from '@angular/core';
declare const ga: any;

@Component({
  selector: 'app-intro-parent',
  templateUrl: './intro-parent.component.html',
  styleUrls: ['./intro-parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }
}
