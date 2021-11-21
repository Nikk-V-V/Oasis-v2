import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent implements OnInit {

  elements = Array(400);

  constructor(
    public dialogRef: MatDialogRef<CongratsComponent>,
  ) { }

  ngOnInit(): void {
  }

  delay(index: number) {
    return `${index * 0.05}s`;
  }
}
