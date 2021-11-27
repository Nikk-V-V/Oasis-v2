import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Participants} from '../../../shared/classes/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  events = new Subject<Event[]>();
  regToEvents = new Subject<Participants[]>();

  constructor(
    private store: AngularFirestore,
    private database: AngularFireDatabase,
    private storage: AngularFireStorage,
  ) {

  }

  create(data: any): void {
    this.store.collection('event').add(data).then();
  }

  getAll(type): Observable<any> {
    const collection = this.store.collection(`event`, ref => ref.where('type', '==', type)).snapshotChanges();
    collection.subscribe((res: any) => {
      this.events.next(res.map((a: any) => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      }));
    });
    return this.events;
  }

  getById(id: string): Observable<any> {
    return this.store.doc(`event/${id}`).valueChanges();
  }

  delete(id: string, src: string): void {
    this.store.doc(`event/${id}`).delete().then();
    this.storage.ref(src).delete();
  }

  edit(data: any, id: string): void {
    this.store.doc(`event/${id}`).update(data).then();
  }

  updateStatus(id: string): void {
    this.store.doc(`event/${id}`).update({statusReg: false}).then();
  }

  getParticipants(eventId: string): Observable<any> {
    const collection = this.store.collection('regToEvent', ref => ref.where('event', '==', eventId)).snapshotChanges();
    collection.subscribe((res: any) => {
      this.regToEvents.next(res.map((a: any) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {...data, id};
      }));
    });
    return this.regToEvents;
  }

  removeParticipants(id: string): void {
    this.store.doc(`regToEvent/${id}`).delete().then();
  }
}
