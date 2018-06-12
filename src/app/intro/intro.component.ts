import { Component, OnInit } from '@angular/core';
declare const ga: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }

}
