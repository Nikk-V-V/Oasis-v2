import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UploadVersionService {

  constructor(private updates: SwUpdate) {
    updates.versionUpdates.subscribe(() => {
      console.log('New version');
      updates.activateUpdate().then(() => {
        console.log('Updated');
        document.location.reload();
      });
    });
  }
}
