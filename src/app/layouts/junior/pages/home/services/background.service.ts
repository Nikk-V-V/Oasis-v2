import {ElementRef, Injectable, NgZone} from '@angular/core';
import {
  BufferAttribute,
  BufferGeometry,
  FogExp2,
  PerspectiveCamera, PointLight, Points, PointsMaterial,
  Scene,
  TextureLoader,
  WebGLRenderer
} from 'three';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private canvas: HTMLCanvasElement;
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private particlesGeometry: BufferGeometry;
  private particleCount = 5000;
  private particleMaterial: PointsMaterial;
  private pointLight : PointLight;

  private particlesMesh: Points;

  private posArray: Float32Array;

  frameId: number = null;


  constructor(private ngZone: NgZone) { }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    // create the scene
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 100
    );
    this.camera.position.x = 0
    this.camera.position.y = 0
    this.camera.position.z = 2
    this.scene.add(this.camera)

    this.renderer = new WebGLRenderer({
      canvas: this.canvas
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.scene.fog = new FogExp2(0x0000, 0.001);
    this.renderer.setClearColor(this.scene.fog.color);


    this.pointLight = new PointLight(0xffffff, 0.1)
    this.pointLight.position.x = 2
    this.pointLight.position.y = 3
    this.pointLight.position.z = 4
    this.scene.add(this.pointLight)


    this.scene.background = new TextureLoader().load('assets/images/background2.webp')

    const star = new TextureLoader().load('assets/textures/star.png')

    this.particlesGeometry = new BufferGeometry;

    this.posArray = new Float32Array(this.particleCount * 3)
    for (let i = 0; i < this.particleCount * 3; i++) {
      this.posArray[i] = (Math.random() - 0.5) * (Math.random() * 10);
    }
    this.particlesGeometry.setAttribute('position', new BufferAttribute(this.posArray, 3))

    this.particleMaterial = new PointsMaterial({
      size: 0.01,
      transparent: true,
      color: '#de00fc',
      map: star
    });

    this.particlesMesh = new Points(this.particlesGeometry, this.particleMaterial);
    this.scene.add(this.particlesMesh)
  }

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });

      window.addEventListener('mousemove', (e) => {
        this.particlesMesh.rotation.x = (e.clientY * 0.01)
        this.particlesMesh.rotation.y = (e.clientX * 0.01)
        this.particlesMesh.rotation.z = (e.clientX * 0.01) + (e.clientY * 0.01)
      })
    });
  }

  public render(): void {
    this.particlesMesh.rotation.y += 0.008
    this.particlesMesh.rotation.x += 0.008
    this.particlesMesh.rotation.z += 0.008
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
}
