import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss']
})
export class GalleryPage implements  OnInit{

  constructor(
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }
}
