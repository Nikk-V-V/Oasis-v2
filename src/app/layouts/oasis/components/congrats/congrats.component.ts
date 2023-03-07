import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CongratsComponent>,
  ) { }

  ngOnInit(): void {}
}
