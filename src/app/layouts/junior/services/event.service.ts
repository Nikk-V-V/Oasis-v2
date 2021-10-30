import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map, Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CongratsComponent} from '../components/congrats/congrats.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private store: AngularFirestore,
    private dialog: MatDialog
  ) { }

  get(): Observable<any> {
    return this.store
      .collection('event', ref => ref.orderBy('title', 'asc'))
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

  getById(id: string): Observable<any> {
    return this.store.doc(`event/${id}`).valueChanges();
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
