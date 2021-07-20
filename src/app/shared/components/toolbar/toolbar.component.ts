import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  visibility = true

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      const pathName = window.location.pathname
      if (res instanceof RouterEvent) {
        res.url.split('/')[2] != 'menu' ? this.visibility = true : this.visibility = false
      }
      if (pathName.split('/')[2] === 'menu') this.visibility = false
    })
  }

  back() {
    this.location.back()
  }
}
