import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsPage} from './contacts.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [{path: '', component: ContactsPage}]

@NgModule({
  declarations: [ContactsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule
  ]
})
export class ContactsModule { }
