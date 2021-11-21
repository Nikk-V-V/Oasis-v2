import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'testimony.page.html',
  styleUrls: ['testimony.page.scss']
})
export class TestimonyPage implements  OnInit{

  box;

  rotation = 240;

  constructor() {
  }

  ngOnInit(): void {
    this.box = document.querySelector('#box');
    this.box.style.transform = `perspective(1000px) rotateY(${this.rotation}deg)`;
  }

  swap(dir: string): void {
    switch (dir) {
      case 'right':
        this.changeRotation(-120);
        break;
      case 'left':
        this.changeRotation(120);
        break;
      default:
        break;
    }
  }

  changeRotation(value: number) {
    if ((this.rotation + value) === 360) {
      this.rotation = 0;
      this.box.style.transform = `perspective(1000px) rotateY(0deg)`;
    } else if ((this.rotation + value) < 0) {
      this.rotation = 240;
      this.box.style.transform = `perspective(1000px) rotateY(240deg)`;
    } else  {
      this.rotation += value;
      this.box.style.transform = `perspective(1000px) rotateY(${this.rotation}deg)`;
    }
  }
}
