import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../../services/event.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  form: UntypedFormGroup;
  file: File;
  eventId: string;


  constructor(
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
   this.init().then();
  }


  async init(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventService
        .getById(params.id)
        .subscribe((event) => {
          this.form = new UntypedFormGroup({
            title: new UntypedFormControl(event.title, [Validators.required, Validators.minLength(3)]),
            info: new UntypedFormControl([...event.info]),
            price: new UntypedFormControl(event.price, [Validators.required]),
            additionalPrice: new UntypedFormControl(event.additionalPrice, [Validators.required]),
            startDate: new UntypedFormControl(event.startDate, [Validators.required]),
            endDate: new UntypedFormControl(event.endDate, [Validators.required]),
            document: new UntypedFormControl(event.document, [Validators.required]),
            image: new UntypedFormControl(event.image, [Validators.required]),
            startTime: new UntypedFormControl(event.startTime, [Validators.required]),
            endTime: new UntypedFormControl(event.endTime, [Validators.required]),
            importantly: new UntypedFormControl(event.importantly, [Validators.required])
          });
          console.log(this.form);
        });
    });
  }


  addInfo() {
    console.log(this.form);
    // if (par.value.trim()) {
    //   this.paragraphs.push(par.value);
    //   par.value = '';
    // }
  }

  red(): void {
    console.log(this.form);
    // const input: any = document.querySelectorAll('.par')[index];
    // this.paragraphs[index] = input.value;
  }

  async createEvent() {
    this.form.value.startDate = this.form.value.startDate.toString();
    this.form.value.endDate = this.form.value.endDate.toString();
    await this.eventService.edit(this.form.value, this.eventId);
  }
}
