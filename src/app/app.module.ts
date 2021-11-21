import {NgModule} from '@angular/core';
import { environment } from '../environments/environment';

import {AppComponent} from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const router: Routes = [
  {path: '', redirectTo: 'preview', pathMatch: 'full'},
  {path: 'preview', loadChildren: () => import('./layouts/preview/preview.layout.module').then(m => m.PreviewLayoutModule)},
  {path: 'oasis', loadChildren: () => import('./layouts/oasis/oasis.layout.module').then(m => m.OasisLayoutModule)},
  {path: 'shop', loadChildren: () => import('./layouts/shop/shop.layout.module').then(m => m.ShopLayoutModule)},
  {path: 'admin', loadChildren: () => import('./layouts/admin/admin.layout.module').then(m => m.AdminLayoutModule)},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(router, {preloadingStrategy: PreloadAllModules}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
