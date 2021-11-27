import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../../services/event.service';

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
  url = '';
  isDisableDownload = true;
  img: string | ArrayBuffer;

  constructor(
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.type = window.location.pathname.split('/')[2];
      this.form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(3)]),
        info: new FormControl(this.paragraphs),
        price: new FormControl(700, [Validators.required]),
        additionalPrice: new FormControl(300, [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        statusReg: new FormControl('Active'),
        type: new FormControl(this.type),
        document: new FormControl('', [Validators.required]),
        image: new FormControl(this.url, [Validators.required]),
      });
    });
  }


  addInfo(par: HTMLTextAreaElement) {
    this.paragraphs.push(par.value);
    par.value = '';
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

  red(index: number): void {
    const input: any = document.querySelectorAll('.par')[index];
    this.paragraphs[index] = input.value;
  }

  async load(): Promise<void> {
    this.isDisableDownload = true;
    const path = `event/${this.type}/${this.file.name}_${new Date().getTime()}`;
    const ref = this.storage.ref(path);
    this.storage.upload(path, this.file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url: string) => {
              this.form.get('image').setValue(url);
              this.url = url;
          });
        })
      ).subscribe();
  }

  async createEvent() {
    this.form.value.startDate = this.form.value.startDate.toString();
    this.form.value.endDate = this.form.value.endDate.toString();
    await this.eventService.create(this.form.value);
    await this.router.navigate([`admin/${this.type}/event/list`]);
  }
}
