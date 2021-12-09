import {Component, OnDestroy, OnInit} from '@angular/core';
import {Event} from '../../../../../shared/classes/event';
import {EventService} from '../../../services/event.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  events: Array<Event> = [];
  sub: Subscription;

  type: string;

  constructor(
    private event: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.type = window.location.pathname.split('/')[2];
      this.get(this.type);
    });
  }

  ngOnDestroy = (): void => {
    this.sub.unsubscribe();
  }

  get(type: string): void {
    this.sub = this.event.getAll(type).subscribe(res => {
      this.events = res;
    });
  }

  delete(event: Event): void {
    this.event.delete(event.id, event.image);
  }

  updateStatus(event: Event, status: string): void {
    this.event.updateStatus(event.id, status);
  }
}
