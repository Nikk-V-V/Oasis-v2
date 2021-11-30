import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map, Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CongratsComponent} from '../components/congrats/congrats.component';
import {Event} from '../../../shared/classes/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private store: AngularFirestore,
    private dialog: MatDialog
  ) { }

  get(type: string): Observable<any> {
    return this.store
      .collection('event', ref => ref.where('type', '==', type))
      .snapshotChanges()
      .pipe(
        map((dates) => {
          return dates.map((date) => {
            return {
              event: date.payload.doc.data(),
              id: date.payload.doc.id
            };
          });
        })
      );
  }

  getById(id: string): Observable<Event> {
    return this.store.doc<Event>(`event/${id}`).valueChanges();
  }

  regToEvent(eventId: string, data: any) {
    this.store
      .collection(`regToEvent`)
      .add(data)
      .then(() => {
        this.dialog.open(CongratsComponent, {
          panelClass: 'congrats',
          width: '100%',
          maxWidth: '100%'
        });
      });
  }
}
