import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ViewPhotoComponent} from "../view-photo/view-photo.component";

@Component({
  selector: 'tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  @ViewChild('one', {static: true})
  public one: ElementRef<HTMLDivElement>;

  @ViewChild('second', {static: true})
  public second: ElementRef<HTMLDivElement>;

  departure = false

  tiles = [
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg11.jpg_1618085783022?alt=media&token=66498dd8-4b11-4e49-a1c3-8b2c2953c67b'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg1.jpg_1618085810558?alt=media&token=013edf67-c54b-4c6e-a643-77f395c23ddd'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg6.jpg_1618086107705?alt=media&token=98f80bdd-b5be-4348-9b1d-f3b0b3e83d8e'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg12.jpg_1618086094191?alt=media&token=1898c1f8-95ed-4671-83ab-68df79af4359'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg3.jpg_1618086126535?alt=media&token=411e1de3-cfb5-4d94-a2a8-5cdd1a39e7d9'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg2.jpg_1618086168491?alt=media&token=d9518f36-ad0b-4b56-be71-d803ccc94f2b'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg15.jpg_1618141141409?alt=media&token=7ad8a863-9931-46ae-b349-ee34b82114b0'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fimg8.jpg_1618141178114?alt=media&token=847564bc-8200-4796-ad5d-409bb97d3f7d'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2Fphoto_2021-04-23_09-46-35.jpg_1619167881112?alt=media&token=9d24dc8f-3bf5-4db1-84ef-9a81cc3604c9'},
    {src: 'https://firebasestorage.googleapis.com/v0/b/oasa-f33c4.appspot.com/o/tiles%2FIMG-ed4abebb41ab3ab7e92b1fcecabf5487-V.jpg_1619177726079?alt=media&token=3bad9884-106e-49a1-82dd-445a02ed735a'},
  ]

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getTiles()
    setTimeout(() => {
      this.departure = true
    }, 15000)
  }

  getTiles(): void {
    for (let i = 1; i < 200; i++) {
      const duration = `animation-duration:${this.getDuration}`
      const delay = `animation-delay:${this.getDelay}`
      if (i < 100) {
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

  showPhotoWindow(): void {
    this.dialog.open(ViewPhotoComponent, {
      height: '100vh',
      width: '100%',
      maxWidth: '100%',
      panelClass: 'photo-view',
      data: this.tiles
    });
  }

  get getDuration(): string {
    return `${2 * (Math.random() * 5)}s`
  }

  get getDelay(): string {
    return `${Math.random() * 5}s`
  }
}
