import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Photo} from "../../../../../../shared/classes/gallery";

@Component({
  selector: 'view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.scss']
})
export class ViewPhotoComponent implements OnInit {

  selectedPhoto: Photo;

  constructor(
    public dialogRef: MatDialogRef<ViewPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {photos: Photo[], photo: Photo}
  ) {
    this.selectedPhoto = data.photo;
  }

  ngOnInit(): void {
  }

  selectPhoto(photo: Photo): void {
    this.selectedPhoto = photo;
  }
}
