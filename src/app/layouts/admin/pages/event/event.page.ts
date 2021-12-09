import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Event} from '../../../../shared/classes/event';
import {Subscriber} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss']
})
export class EventPage implements  OnInit{

  events: Array<Event> = [];
  sub: Subscriber<Event>;

  constructor(
    private event: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy = (): void => {
    this.sub.unsubscribe();
  }
}
