import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GoToComponent} from "./go-to/go-to.component";

@Component({
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss']
})
export class EventPage implements  OnInit{


  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

  }

  goTo(): void {
    this.dialog.open(GoToComponent, {
      panelClass: 'reg-to-event'
    })
  }
}
