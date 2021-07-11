import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePage} from './home.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

const routes: Routes = [{path: '', component: HomePage}]

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
