import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryPage} from './gallery.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MAT_DATE_LOCALE} from '@angular/material/core';


const routes: Routes = [{path: '', component: GalleryPage}];

@NgModule({
  declarations: [GalleryPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'},
  ]
})
export class GalleryModule { }
