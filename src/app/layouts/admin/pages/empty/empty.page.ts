import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'empty.page.html',
  styleUrls: ['empty.page.scss']
})
export class EmptyPage implements  OnInit{

  constructor(
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }
}
