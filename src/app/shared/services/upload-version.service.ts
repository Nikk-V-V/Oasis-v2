import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Injectable({
  providedIn: 'root'
})
export class UploadVersionService {

  constructor(private updates: SwUpdate) {
    updates.available.subscribe(() => {
      updates.activateUpdate().then(() => document.location.reload())
    })
  }
}
