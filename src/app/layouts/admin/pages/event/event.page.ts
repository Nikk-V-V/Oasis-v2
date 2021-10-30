import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss']
})
export class EventPage implements  OnInit{

  constructor(
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }
}
