import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventPage} from './event.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MatButtonModule} from "@angular/material/button";
import { GoToComponent } from './go-to/go-to.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [{path: '', component: EventPage}]

@NgModule({
  declarations: [EventPage, GoToComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class EventModule { }
