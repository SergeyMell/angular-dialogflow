import { Component, OnInit } from '@angular/core';
declare const ga: any;

@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css']
})
export class EarnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }

}
