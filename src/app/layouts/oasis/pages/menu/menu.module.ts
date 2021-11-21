  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import {MenuPage} from './menu.page';
  import {RouterModule, Routes} from '@angular/router';
  import {SharedModule} from '../../../../shared/shared.module';

  const routes: Routes = [{path: '', component: MenuPage}];

  @NgModule({
  declarations: [MenuPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MenuModule { }
