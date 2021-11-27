import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';


const routes: Routes = [{path: '', component: CreateComponent}];

@NgModule({
  declarations: [CreateComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
      {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'}
    ]
})
export class CreateModule { }
