import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryPage} from './gallery.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { TilesComponent } from './tiles/tiles.component';
import {MatIconModule} from "@angular/material/icon";
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { VideosComponent } from './videos/videos.component';
import { VideoStudyComponent } from './video-study/video-study.component';
import {VideoTexture} from "three";

const routes: Routes = [
  {
    path: '', component: GalleryPage, children: [
      {path: '', redirectTo: 'tiles', pathMatch: 'full'},
      {path: 'accordion', component: AccordionComponent, data: {animation: 'Accordion'}},
      {path: 'tiles', component: TilesComponent, data: {animation: 'Tiles'}},
      {path: 'videos', component: VideosComponent, data: {animation: 'Videos'}},
      {path: 'videos-study', component: VideoStudyComponent, data: {animation: 'VideoStudy'}},
    ]
  }
]

@NgModule({
  declarations: [GalleryPage, AccordionComponent, NavigateComponent, TilesComponent, ViewPhotoComponent, VideosComponent, VideoStudyComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class GalleryModule { }
