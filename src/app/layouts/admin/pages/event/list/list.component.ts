import { Component, OnInit } from '@angular/core';
import {Event} from '../../../../../shared/classes/event';
import {EventService} from '../../../services/event.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  events: Array<Event> = [];
  sub: Subscription;


  constructor(
    private event: EventService,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  ngOnDestroy = (): void => {
    this.sub.unsubscribe();
  }

  get(): void {
    this.sub = this.event.getAll().subscribe(res => {
      console.log(res);
      this.events = res;
    });
  }

  delete(event: Event): void {
    this.event.delete(event.id, event.image);
  }

  updateStatus(event: Event): void {
    this.event.updateStatus(event.id);
  }
}
