import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GoToComponent} from "./go-to/go-to.component";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss']
})
export class EventPage implements  OnInit{


  constructor(
    private dialog: MatDialog,
    private meta: Meta,
    private titleService: Title,
  ) {
  }

  ngOnInit(): void {
    this.meta.addTags([
      {property: 'og:image', content: 'assets/images/baner2.jpg'},
      {property: 'og:title', content: 'Oasis'}
    ])
  }

  goTo(): void {
    this.dialog.open(GoToComponent, {
      panelClass: 'reg-to-event'
    })
  }
}
