import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Event} from '../../../../shared/classes/event';
import {Subscriber} from 'rxjs';

@Component({
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss']
})
export class EventPage implements  OnInit{

  events: Array<Event> = [];
  sub: Subscriber<Event>;

  constructor(
    private event: EventService,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy = (): void => {
    this.sub.unsubscribe();
  }



  delete(event: Event): void {
    this.event.delete(event.id, event.image);
  }

  updateStatus(event: Event): void {
    this.event.updateStatus(event.id);
  }
}
