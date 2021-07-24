import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryPage} from './gallery.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { TilesComponent } from './components/tiles/tiles.component';

const routes: Routes = [{path: '', component: GalleryPage}]

@NgModule({
  declarations: [GalleryPage, AccordionComponent, NavigateComponent, TilesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class GalleryModule { }
