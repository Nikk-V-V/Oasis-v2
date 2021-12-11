import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {style, trigger, state, transition, animate} from '@angular/animations';

@Component({
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
  animations: [
    trigger('light', [
      state('start', style({
        boxShadow: 'inset 0 0 110px 400px black'
      })),
      state('end', style({
        boxShadow: 'inset 0 0 110px 0 black'
      })),
      transition('start <=> end', animate(800))
    ]),
    trigger('top-buttons', [
      state('start', style({
        top: '-100%',
        right: '-100%'
      })),
      state('end', style({
        top: '10%',
        right: '10%'
      })),
      transition('start <=> end', animate(800))
    ]),
    trigger('bottom-buttons', [
      state('start', style({
        bottom: '-100%',
        left: '-100%'
      })),
      state('end', style({
        bottom: '10%',
        left: '10%'
      })),
      transition('start <=> end', animate(800))
    ]),
  ]
})
export class MenuPage implements  OnInit {

  state = 'start';
  path: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.path = data.path;
    });
    setTimeout(() => {
      this.state = 'end';
    }, 500);
  }
}
