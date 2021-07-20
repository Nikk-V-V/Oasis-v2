import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routerAnimations} from '../../shared/animations/routerAnimation'


@Component({
  templateUrl: 'junior.layout.html',
  styleUrls: ['junior.layout.scss'],
  animations: [routerAnimations],
})
export class JuniorLayout implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
