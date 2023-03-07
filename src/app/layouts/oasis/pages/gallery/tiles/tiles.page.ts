import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ViewPhotoComponent} from '../components/view-photo/view-photo.component';
import {Photo} from '../../../../../shared/classes/gallery';
import {GalleryService} from '../../../services/gallery.service';

@Component({
  selector: 'tiles',
  templateUrl: './tiles.page.html',
  styleUrls: ['./tiles.page.scss']
})
export class TilesPage implements OnInit {
  photos: Photo[];

  constructor(
    private dialog: MatDialog,
    private galleryService: GalleryService
  ) {
  }

  ngOnInit(): void {
    this.getTiles();
    this.getPhoto();
  }

  getTiles(): void {
  }

  getPhoto() {
    this.galleryService
      .getPhoto()
      .subscribe((photos: Photo[]) => {
        this.photos = photos.reverse();
      });
  }

  showPhotoWindow(photo: Photo): void {
    this.dialog.open(ViewPhotoComponent, {
      height: '100vh',
      maxWidth: '100%',
      panelClass: 'photo-view',
      data: {
        photos: this.photos,
        photo
      }
    });
  }

  get getDuration(): string {
    return `${(Math.random() * 5)}s`;
  }

  get getDelay(): string {
    return `${Math.random() * 7}s`;
  }

  get getStyles() {
    return {
      animationDuration: `${this.getDuration}`,
    };
  }
}
