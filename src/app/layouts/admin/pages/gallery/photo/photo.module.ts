import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PhotoComponent} from './photo.component';


const routes: Routes = [{path: '', component: PhotoComponent}];

@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PhotoModule { }
