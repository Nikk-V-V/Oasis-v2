import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  type: string;
  form: FormGroup;
  file: File;
  paragraphs: string[] = [];
  private img: string | ArrayBuffer;
  private isDisableDownload: boolean;
  private url: string;

  constructor(
    private storage: AngularFireStorage,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.type = window.location.pathname.split('/')[2];
    });
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      info: new FormControl([]),
      price: new FormControl(0),
      af: new FormControl(0),
      startData: new FormControl(''),
      endData: new FormControl(''),
      statusReg: new FormControl(true),
      type: new FormControl(''),
      document: new FormControl(''),
    });
  }


  addInfo(par: HTMLTextAreaElement) {
    console.log(par.value);
    this.paragraphs.push(par.value);
    console.log(this.paragraphs);
    par.value = '';
  }

  loadImg(e: any): void {
    this.file = e.target.files[0];
    const reader = new FileReader();

    if (this.file) {
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
    const path = `event/${this.file.name}_${new Date().getTime()}`;
    const ref = this.storage.ref(path);
    this.storage.upload(path, this.file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url: any) => {
            this.url = url;
          });
        })
      ).subscribe();
  }
}
