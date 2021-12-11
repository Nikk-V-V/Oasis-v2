import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BackgroundService} from './services/background.service';
import {EventService} from '../../services/event.service';
import {EventResponse} from '../../../../shared/classes/event';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements  OnInit, OnDestroy{

  @ViewChild('oasis', {static: true})
  public oasis: ElementRef<HTMLCanvasElement>;

  events: EventResponse[] = [];

  link: string;
  quote: string;
  listTitle: string;
  listItems: string[];
  conclusions: string;

  constructor(
    private topContent: BackgroundService,
    private eventService: EventService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.topContent.createScene(this.oasis);
    this.topContent.animate();

    this.route.data.subscribe(data => {
      this.link = data.fireEventsLink;
      this.quote = data.quote;
      this.listTitle = data.listTitle;
      this.listItems = data.listItems;
      this.conclusions = data.conclusions;
      this.getEvents(data.type);
    });
  }

  ngOnDestroy() {
    this.topContent.ngOnDestroy();
  }

  getEvents(type: string): void {
    this.eventService.get(type).subscribe((events: EventResponse[]) => this.events = events);
  }
}
