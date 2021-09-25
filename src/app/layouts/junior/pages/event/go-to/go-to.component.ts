import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss']
})
export class GoToComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<GoToComponent>,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sex: new FormControl('', [Validators.required]),
      city: new FormControl('Оберіть місто', [Validators.required]),
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
    })
  }

  calculateAge(): void {
    let birth_date = new Date(this.form.controls.birthday.value)

    let birth_year = birth_date.getFullYear()
    let birth_month = birth_date.getMonth()
    let birth_day = birth_date.getDate()

    let today_date = new Date()

    let today_year = today_date.getFullYear()
    let today_month = today_date.getMonth()
    let today_day = today_date.getDate()

    let age = today_year - birth_year

    if (today_month < birth_month) age--
    if (today_month === birth_month)
      if (today_day < birth_day) age--

    // this.form.controls.age.value = age
  }
}
