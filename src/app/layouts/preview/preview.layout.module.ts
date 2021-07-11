import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewLayout} from './preview.layout';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', component: PreviewLayout}];

@NgModule({
  declarations: [PreviewLayout],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PreviewLayoutModule { }
