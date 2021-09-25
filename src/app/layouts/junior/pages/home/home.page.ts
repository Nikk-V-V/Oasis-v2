import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BackgroundService} from './services/background.service';
import {EventService} from "../../services/event.service";
import {Event, EventResponse} from "../../../../shared/classes/event";


@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements  OnInit, OnDestroy{

  @ViewChild('oasis', {static: true})
  public oasis: ElementRef<HTMLCanvasElement>;

  events: EventResponse[] = [];

  constructor(private topContent: BackgroundService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.topContent.createScene(this.oasis);
    this.topContent.animate();
    this.getEvents();
  }

  ngOnDestroy() {
  }

  getEvents(): void {
    this.eventService.get().subscribe((events: EventResponse[]) => this.events = events);
  }
}
