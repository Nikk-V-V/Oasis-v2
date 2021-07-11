import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildrenLayout} from './children.layout';
import {RouterModule, Routes} from '@angular/router';
import {PreviewLayout} from '../preview/preview.layout';

const routes: Routes = [{path: '', component: ChildrenLayout}];


@NgModule({
  declarations: [ChildrenLayout],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChildrenLayoutModule { }
