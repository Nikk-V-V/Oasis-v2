import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {routerAnimations} from '../../shared/animations/routerAnimation';


@Component({
  templateUrl: 'oasis.layout.html',
  styleUrls: ['oasis.layout.scss'],
  animations: [routerAnimations],
})
export class OasisLayout implements OnInit {
  homePath: string;

  constructor(
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.homePath = window.location.pathname.split('/')[2];
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
