import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryPage} from './gallery.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { TilesComponent } from './components/tiles/tiles.component';
import {MatIconModule} from "@angular/material/icon";
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '', component: GalleryPage, children: [
      {path: '', redirectTo: 'tiles', pathMatch: 'full'},
      {path: 'tiles', component: TilesComponent}
    ]
  }
]

@NgModule({
  declarations: [GalleryPage, AccordionComponent, NavigateComponent, TilesComponent, ViewPhotoComponent],
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
