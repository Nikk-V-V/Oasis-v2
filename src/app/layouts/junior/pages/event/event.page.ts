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
      {name: 'image', content: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/event%2Fevent.jpg_1632414538952?alt=media&token=a9ef8296-057c-4ad9-ae85-c087c5319879'},
      {name: 'title', content: 'Oasis'}
    ])
  }

  goTo(): void {
    this.dialog.open(GoToComponent, {
      panelClass: 'reg-to-event'
    })
  }
}
