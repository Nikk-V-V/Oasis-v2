import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadVersionService {

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.versionUpdates.pipe(
      map(() => {
        this.swUpdate.activateUpdate().then(r => window.location.reload());
      }),
    );
  }
}
