import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventPage} from './event.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MatButtonModule} from "@angular/material/button";
import { GoToComponent } from './go-to/go-to.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const routes: Routes = [{path: '', component: EventPage}]

@NgModule({
  declarations: [EventPage, GoToComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatListModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatProgressSpinnerModule
    ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'},
  ]
})
export class EventModule { }
