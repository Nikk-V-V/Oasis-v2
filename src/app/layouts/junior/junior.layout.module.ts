import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JuniorLayout} from './junior.layout';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


const routes: Routes = [
  {
    path: '', component: JuniorLayout, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)}
    ]
  },
];

@NgModule({
  declarations: [JuniorLayout],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class JuniorLayoutModule { }
