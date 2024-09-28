import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
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
  form: UntypedFormGroup;
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
    this.route.data.subscribe(() => {
      this.type = window.location.pathname.split('/')[2];
      this.form = new UntypedFormGroup({
        title: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
        info: new UntypedFormControl(this.paragraphs),
        price: new UntypedFormControl(700, [Validators.required]),
        additionalPrice: new UntypedFormControl(300, [Validators.required]),
        startDate: new UntypedFormControl('', [Validators.required]),
        endDate: new UntypedFormControl('', [Validators.required]),
        statusReg: new UntypedFormControl('Active'),
        type: new UntypedFormControl(this.type),
        document: new UntypedFormControl('', [Validators.required]),
        image: new UntypedFormControl(this.url, [Validators.required]),
        startTime: new UntypedFormControl('', [Validators.required]),
        endTime: new UntypedFormControl('', [Validators.required]),
        importantly: new UntypedFormControl('', [Validators.required]),
        anotherPriceString: new UntypedFormControl('')
      });
    });
  }


  addInfo(par: HTMLTextAreaElement) {
    if (par.value.trim()) {
      this.paragraphs.push(par.value);
      par.value = '';
    }
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
