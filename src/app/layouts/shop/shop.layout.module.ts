import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopLayout} from './shop.layout';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', component: ShopLayout}];

@NgModule({
  declarations: [ShopLayout],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopLayoutModule { }
