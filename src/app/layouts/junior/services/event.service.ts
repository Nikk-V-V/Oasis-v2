import { Injectable } from '@angular/core';
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import {Event, EventResponse} from "../../../shared/classes/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private store: AngularFirestore) { }

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
            }
          })
        })
      )
  }

  getById(id: string): Observable<any> {
    return this.store.doc(`event/${id}`).valueChanges()
  }
}
