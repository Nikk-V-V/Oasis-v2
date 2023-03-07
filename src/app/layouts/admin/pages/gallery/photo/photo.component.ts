import { Component, OnInit } from '@angular/core';
import {Photo} from '../../../../../shared/classes/gallery';
import {GalleryService} from '../../../../oasis/services/gallery.service';
import {MatDialog} from '@angular/material/dialog';
import {AddPhotoComponent} from './components/add-photo/add-photo.component';

@Component({
  selector: 'app-events',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photos: Photo[];

  constructor(
    private galleryService: GalleryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  getPhoto() {
    this.galleryService
      .getPhoto()
      .subscribe((photos: Photo[]) => {
        this.photos = photos.reverse();
      });
  }

  addPhoto() {
    this.dialog.open(AddPhotoComponent);
  }
}
