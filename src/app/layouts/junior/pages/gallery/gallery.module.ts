import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryPage} from './gallery.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import { NavigateComponent } from './components/navigate/navigate.component';
import {MatIconModule} from "@angular/material/icon";
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '', component: GalleryPage, children: [
      {path: '', redirectTo: 'tiles', pathMatch: 'full'},
      {path: 'accordion', loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule), data: {animation: 'Accordion'}},
      {path: 'tiles', loadChildren: () => import('./tiles/tiles.module').then(m => m.TilesModule), data: {animation: 'Tiles'}},
      {path: 'videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule), data: {animation: 'Videos'}},
      {path: 'videos-study', loadChildren: () => import('./video-study/video-study.module').then(m => m.VideoStudyModule), data: {animation: 'VideoStudy'}},
    ]
  }
]

@NgModule({
  declarations: [GalleryPage, NavigateComponent, ViewPhotoComponent],
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
