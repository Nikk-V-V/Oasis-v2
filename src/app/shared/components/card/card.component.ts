import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SharesWindowComponent} from './shares-window/shares-window.component';
import {Event, EventResponse} from '../../classes/event';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() events: EventResponse[];

  type: string;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.type = window.location.pathname.split('/')[2];
    })
  }

  share(id: string, event: Event): void {
    this.dialog.open(SharesWindowComponent, {
      panelClass: 'share-modal',
      data: {
        title: event.title,
        image: event.image,
        id,
        type: 'jun'
      }
    });
  }
}
