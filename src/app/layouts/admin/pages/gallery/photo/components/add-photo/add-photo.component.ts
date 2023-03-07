import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {
  private file: any;
  private isDisableDownload: boolean;
  img: string | ArrayBuffer;

  constructor(    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
  }

  loadImg(e: any): void {
    this.file = e.target.files[0];
    const reader = new FileReader();
    if (this.file) {
      this.isDisableDownload = false;
      if (this.file.name.split('.')[1] === 'jpg' || this.file.name.split('.')[1] === 'png' || this.file.name.split('.')[1] === 'webp') {
        reader.onload = (event: ProgressEvent<FileReader>) => {
          this.img = event.target.result;
        };
        reader.readAsDataURL(this.file);
      }
    } else {
      this.img = '';
    }
  }

  async load(): Promise<void> {
    this.isDisableDownload = true;
    const path = `tiles`;
    const ref = this.storage.ref(path);
    this.storage.upload(path, this.file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL();
        })
      ).subscribe();
  }
}
