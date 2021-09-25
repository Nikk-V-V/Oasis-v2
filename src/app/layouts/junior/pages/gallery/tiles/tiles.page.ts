import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ViewPhotoComponent} from "../components/view-photo/view-photo.component";
import {Photo} from "../../../../../shared/classes/gallery";
import {GalleryService} from "../../../services/gallery.service";

@Component({
  selector: 'tiles',
  templateUrl: './tiles.page.html',
  styleUrls: ['./tiles.page.scss']
})
export class TilesPage implements OnInit {

  @ViewChild('one', {static: true})
  public one: ElementRef<HTMLDivElement>;

  @ViewChild('second', {static: true})
  public second: ElementRef<HTMLDivElement>;

  departure = false

  photos: Photo[];

  constructor(
    private dialog: MatDialog,
    private galleryService: GalleryService
  ) {
  }

  ngOnInit(): void {
    this.getTiles()
    setTimeout(() => {
      this.departure = true
    }, 15000)
    this.getPhoto()
  }

  getTiles(): void {
    for (let i = 1; i < 100; i++) {
      const duration = `animation-duration:${this.getDuration}`
      const delay = `animation-delay:${this.getDelay}`
      if (i < 50) {
        this.one
          .nativeElement
          .innerHTML += `
            <div
                style="${duration}; ${delay}"
                class="block"
            >
            </div>
          `
      } else {
        this.second
            .nativeElement
            .innerHTML += `
              <div
                  style="${duration}; ${delay}"
                  class="block"
              >
              </div>
            `
      }
    }
  }

  getPhoto() {
    this.galleryService
      .getPhoto()
      .subscribe((photos: Photo[]) => {
        this.photos = photos.reverse();
      })
  }

  showPhotoWindow(photo: Photo): void {
    this.dialog.open(ViewPhotoComponent, {
      height: '100vh',
      maxWidth: '100%',
      panelClass: 'photo-view',
      data: {
        photos: this.photos,
        photo: photo
      }
    });
  }

  get getDuration(): string {
    return `${2 * (Math.random() * 5)}s`
  }

  get getDelay(): string {
    return `${Math.random() * 5}s`
  }
}
