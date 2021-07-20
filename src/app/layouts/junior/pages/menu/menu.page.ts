import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage implements  OnInit, OnDestroy{

  load = false;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true
    }, 500)
  }

  ngOnDestroy() {
    this.load = false;
  }
}
