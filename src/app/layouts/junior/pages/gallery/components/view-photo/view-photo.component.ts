import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.scss']
})
export class ViewPhotoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
