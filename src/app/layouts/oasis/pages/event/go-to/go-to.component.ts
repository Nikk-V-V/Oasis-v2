import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../services/event.service';

@Component({
  selector: 'app-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss']
})
export class GoToComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<GoToComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      birthday: new FormControl('', Validators.required),
      age: new FormControl(null, [Validators.required, Validators.max(18)]),
      sex: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      phone: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
        ]
      ),
      isTelegram: new FormControl(false),
      isViber: new FormControl(false),
      isWhatsApp: new FormControl(false),
      parentPhone: new FormControl(null, [Validators.required, Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)]),
      itWasJun: new FormControl(false, [Validators.required]),
      itWasChild: new FormControl(false, [Validators.required]),
      iBelong: new FormControl('', [Validators.required]),
      notes: new FormControl(''),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)]),
    });
  }

  calculateAge(): void {
    const birthDate = new Date(this.form.controls.birthday.value);

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    const todayDate = new Date();

    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth();
    const todayDay = todayDate.getDate();

    let age = todayYear - birthYear;

    if (todayMonth < birthMonth) { age--; }
    if (todayMonth === birthMonth) {
      if (todayDay < birthDay) { age--; }
    }

    this.form.get('age').setValue(age);
  }

  registration(): void {
    const data = {
      ...this.form.value,
      birthday: new Date(this.form.value.birthday).toLocaleDateString(),
      event: this.data.eventId
    };

    this.eventService.regToEvent(data.event, data);

    this.dialogRef.close();
  }
}
