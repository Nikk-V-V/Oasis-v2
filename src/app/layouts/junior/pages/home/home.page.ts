import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BackgroundService} from './services/background.service';


@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements  OnInit{

  @ViewChild('oasis', {static: true})
  public oasis: ElementRef<HTMLCanvasElement>;

  constructor(private topContent: BackgroundService) {
  }

  ngOnInit(): void {
    this.topContent.createScene(this.oasis);
    this.topContent.animate();
  }
}
