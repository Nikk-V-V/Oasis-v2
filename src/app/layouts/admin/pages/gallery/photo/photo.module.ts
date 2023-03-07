import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PhotoComponent} from './photo.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [{path: '', component: PhotoComponent}];

@NgModule({
  declarations: [PhotoComponent, AddPhotoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
  ],
})
export class PhotoModule { }
