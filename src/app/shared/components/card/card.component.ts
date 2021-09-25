import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharesWindowComponent} from "./shares-window/shares-window.component";
import {EventResponse} from "../../classes/event";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('events') events: EventResponse[];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {}

  share(): void {
    this.dialog.open(SharesWindowComponent, {
      panelClass: 'share-modal'
    })
  }
}
