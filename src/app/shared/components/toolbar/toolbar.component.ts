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
  path: string = ''

  isHidden = false

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      const pathName = window.location.pathname
      if (this.path === pathName) {
        this.isHidden = true
        console.log('Yes', this.isHidden)
      }
      this.path = pathName
      if (res instanceof RouterEvent) {
        res.url.split('/')[2] != 'menu' ? this.visibility = true : this.visibility = false
      }
      if (pathName.split('/')[2] === 'menu') this.visibility = false
    })

    window.addEventListener('scroll', () => {
      let position = window.scrollY;
      if (position <= 39 && position !== 0) this.isHidden = false
      else if (position >= 40) this.isHidden = true
      console.log()
    })
  }

  back() {
    this.location.back()
  }
}
