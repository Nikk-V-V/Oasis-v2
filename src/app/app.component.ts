import {Component, OnInit} from '@angular/core';
import {UploadVersionService} from './shared/services/upload-version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private uploadVersionService: UploadVersionService) {}
}
