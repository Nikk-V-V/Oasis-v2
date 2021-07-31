import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventPage} from './event.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [{path: '', component: EventPage}]

@NgModule({
  declarations: [EventPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatButtonModule
    ]
})
export class EventModule { }
