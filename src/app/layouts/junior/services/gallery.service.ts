import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import {Photo} from "../../../shared/classes/gallery";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private store: AngularFirestore
  ) { }

  getPhoto(): Observable<any[]> {
    return this.store
      .collection('tiles', ref => ref.orderBy('seqNumber', 'asc'))
      .snapshotChanges()
      .pipe(
        map((dates) => {
          return dates.map((data) => {
            return {
              tile: data.payload.doc.data(),
              id: data.payload.doc.id
            }
          })
        })
      );
  }
}
