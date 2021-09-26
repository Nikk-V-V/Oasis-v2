import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GoToComponent} from "./go-to/go-to.component";
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../services/event.service";
import {Event} from "../../../../shared/classes/event";

@Component({
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss']
})
export class EventPage implements  OnInit{

  eventId: string
  event: Event

  constructor(
    private router: ActivatedRoute,
    private eventService: EventService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.router.params.subscribe(res => {
      this.eventId = res['id'];
      this.eventService.getById(res['id'])
        .subscribe((event: Event) => this.event = event)
    })
  }

  goTo(): void {
    this.dialog.open(GoToComponent, {
      panelClass: 'reg-to-event',
      data: {
        eventId: this.eventId
      }
    })
  }
}
