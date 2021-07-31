import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JuniorLayout} from './junior.layout';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


const routes: Routes = [
  {
    path: '', component: JuniorLayout, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), data: {animation: 'HomePage'}},
      {path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule), data: {animation: 'MenuPage'}},
      {path: 'gallery', loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule), data: {animation: 'GalleryPage'}},
      {path: 'event/:id', loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule), data: {animation: 'EventPage'}},
      {path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule), data: {animation: 'ContactsPage'}},
      {path: 'about', loadChildren: () => import('./pages/about-as/about-as.module').then(m => m.AboutAsModule), data: {animation: 'AboutAsPage'}},
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
