import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketLayout} from './market.layout';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', component: MarketLayout}];

@NgModule({
  declarations: [MarketLayout],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketLayoutModule { }
