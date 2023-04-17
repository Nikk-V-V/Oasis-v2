import {Component, OnDestroy, OnInit} from '@angular/core';
import {Event} from '../../../../../shared/classes/event';
import {EventService} from '../../../services/event.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  events: Observable<Event[]>;
  sub: Subscription;

  type: string;

  constructor(
    private event: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(() => {
      this.type = window.location.pathname.split('/')[2];
      this.get(this.type);
    });
  }

  ngOnDestroy = (): void => {
    this.sub.unsubscribe();
  }

  get(type: string): void {
    this.events = this.event.getAll(type);
  }

  delete(event: Event): void {
    this.event.delete(event.id, event.image);
  }

  updateStatus(event: Event, status: string): void {
    this.event.updateStatus(event.id, status);
  }

  showHidde(event: Event): void {
    this.event.showHidde(event.id, event.show);
  }
}
