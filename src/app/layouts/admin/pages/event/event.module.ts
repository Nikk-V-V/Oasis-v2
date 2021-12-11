import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventPage} from './event.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {ParticipantsComponent} from './participants/participants.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {InfoComponent} from './participants/info/info.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [{
  path: '', component: EventPage, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ListComponent},
    {path: 'create', component: CreateComponent},
    {path: ':id', component: ParticipantsComponent},
    {path: 'update/:id', component: UpdateComponent},
  ]
}];

@NgModule({
  declarations: [EventPage, ListComponent, CreateComponent, ParticipantsComponent, InfoComponent, UpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'},
  ]
})
export class EventModule { }
