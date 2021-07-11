import {ElementRef, Injectable, NgZone, OnDestroy} from '@angular/core';
import {
  AmbientLight,
  DirectionalLight,
  FogExp2,
  Mesh,
  MeshLambertMaterial,
  PerspectiveCamera,
  PlaneBufferGeometry,
  PointLight,
  Scene,
  TextureLoader,
  WebGLRenderer,
} from 'three';

@Injectable({providedIn: 'root'})
export class RenderService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private ambient: AmbientLight;
  private directionalLight: DirectionalLight;
  private cloudGeo: PlaneBufferGeometry;
  private cloudMaterial: MeshLambertMaterial;
  private flash : PointLight;

  private cloudParticles: Mesh[] = [];

  frameId: number = null;

  public constructor(private ngZone: NgZone) {
  }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(
      60, window.innerWidth / window.innerHeight, 1, 1000
    );
    this.camera.position.z = 1;
    this.camera.rotation.x = 1.16;
    this.camera.rotation.y = -0.12;
    this.camera.rotation.z = 0.27;
    this.scene.add(this.camera);

    this.ambient = new AmbientLight(0x555555);
    this.scene.add(this.ambient);
    this.directionalLight = new DirectionalLight(0xffeedd);
    this.directionalLight.position.set(0,0,1);
    this.scene.add(this.directionalLight);

    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.scene.fog = new FogExp2(0x0000, 0.002);
    this.renderer.setClearColor(this.scene.fog.color);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    let loader = new TextureLoader();
    loader.load('assets/textures/smoke.png', (texture) =>{
      this.cloudGeo = new PlaneBufferGeometry(400, 400);
      this.cloudMaterial = new MeshLambertMaterial({
        map: texture,
        transparent: true,
      });
      for(let p = 0; p < 170; p++) {
        let cloud = new Mesh(this.cloudGeo, this.cloudMaterial);
        cloud.position.set(
          Math.random() * 1000 - Math.random() * 850,
          Math.random() * 1000,
          Math.random() * 1000 - Math.random() * 900
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 360;
        cloud.material.opacity = 0.6;
        this.cloudParticles.push(cloud)
        this.scene.add(cloud);
      }
    });

    let background = new TextureLoader();
    background.load('assets/textures/fon3.jpg', (texture => {
      this.scene.background = texture
    }))

    this.flash = new PointLight(0x062d89, 30, 500 ,1.7);
    this.flash.position.set(200,300,100);
    this.scene.add(this.flash);
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
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
    });
  }

  public render(): void {
    this.cloudParticles.forEach(p => {
      p.rotation.z -=0.002;
    });

    if(Math.random() > 0.93 || this.flash.power > 100) {
      if(this.flash.power < 100)
        this.flash.position.set(
          Math.random() * window.innerWidth - Math.random() * 900,
          600 + Math.random() * window.innerHeight,
          Math.random() * window.innerHeight - Math.random() * 900
        );
      this.flash.power = 60 + Math.random() * 900;
    }

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
  }
}
