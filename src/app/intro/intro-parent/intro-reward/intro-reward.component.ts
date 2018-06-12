import { Component, OnInit } from '@angular/core';
declare const ga: any;

@Component({
  selector: 'app-intro-reward',
  templateUrl: './intro-reward.component.html',
  styleUrls: ['./intro-reward.component.css']
})
export class RewardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }
}
