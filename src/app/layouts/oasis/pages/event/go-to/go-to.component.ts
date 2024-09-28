import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../services/event.service';

@Component({
  selector: 'app-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss']
})
export class GoToComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    public dialogRef: MatDialogRef<GoToComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
      birthday: new UntypedFormControl('', Validators.required),
      // tslint:disable-next-line:max-line-length
      age: new UntypedFormControl(null, [Validators.required, Validators.max(this.data.type === 'jun' ? 18 : 13), Validators.min(this.data.type === 'jun' ? 12 : 7)]),
      sex: new UntypedFormControl('', [Validators.required]),
      city: new UntypedFormControl('', [Validators.required]),
      phone: new UntypedFormControl(
        null,
        [
          Validators.required,
          Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
        ]
      ),
      isTelegram: new UntypedFormControl(false),
      isViber: new UntypedFormControl(false),
      isWhatsApp: new UntypedFormControl(false),
      parentPhone: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)]),
      itWasJun: new UntypedFormControl(false),
      itWasChild: new UntypedFormControl(false),
      iBelong: new UntypedFormControl('', [Validators.required]),
      notes: new UntypedFormControl(''),
      email: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)]),
      youConfess: new UntypedFormControl('')
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
