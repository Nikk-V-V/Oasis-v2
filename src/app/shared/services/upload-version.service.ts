import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatDialog} from '@angular/material/dialog';
import {UpdateWindowComponent} from '../components/update-window/update-window.component';

@Injectable({
  providedIn: 'root'
})
export class UploadVersionService {

  constructor(private updates: SwUpdate, private dialog: MatDialog) {
    updates.available.subscribe(() => {
      console.log('New version');
      this.update();
    });
  }

  update() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
