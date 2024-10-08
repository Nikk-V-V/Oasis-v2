import {Component, OnDestroy, OnInit} from '@angular/core';
import {GalleryService} from '../../services/gallery.service';

@Component({
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss']
})
export class GalleryPage implements  OnInit, OnDestroy{

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }
}
