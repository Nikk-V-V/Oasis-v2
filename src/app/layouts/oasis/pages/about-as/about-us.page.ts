import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: 'about-us.page.html',
  styleUrls: ['about-us.page.scss']
})
export class AboutUsPage implements  OnInit{

  historyPart: string[];
  nowPart: string[];
  endPart: string[];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.historyPart = data.historyPart;
      this.nowPart = data.nowPart;
      this.endPart = data.endPart;
    });
  }
}
