import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayout} from './admin.layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = [{
  path: '', component: AdminLayout, children: [
    {path: 'event', loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule)},
    {path: 'gallery', loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)},
  ]}
];


@NgModule({
  declarations: [AdminLayout],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ]
})
export class AdminLayoutModule { }