import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventPage} from './event.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MAT_DATE_LOCALE} from '@angular/material/core';

const routes: Routes = [{
  path: '', component: EventPage, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)},
    {path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)}
  ]
}];

@NgModule({
  declarations: [EventPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'},
  ]
})
export class EventModule { }
