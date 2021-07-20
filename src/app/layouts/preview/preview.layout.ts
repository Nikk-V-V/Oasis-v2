import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RenderService} from './services/render.service';

@Component({
  templateUrl: 'preview.layout.html',
  styleUrls: ['preview.layout.scss'],

})
export class PreviewLayout implements OnInit, OnDestroy {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private render: RenderService) {
  }

  ngOnInit(): void {
    this.render.createScene(this.rendererCanvas);
    this.render.animate();
  }

  ngOnDestroy() {
    document.body.removeChild(document.querySelector('#renderCanvas'));
  }
}
