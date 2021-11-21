import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage implements  OnInit, OnDestroy{

  load = false;
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
      this.load = true;
    }, 500);
  }

  ngOnDestroy() {
    this.load = false;
  }
}
