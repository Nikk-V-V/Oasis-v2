import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-window',
  templateUrl: './update-window.component.html',
  styleUrls: ['./update-window.component.scss']
})
export class UpdateWindowComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateWindowComponent>,
  ) { }

  ngOnInit(): void {
  }

}
