import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsPage} from './about-us.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [{path: '', component: AboutUsPage}]

@NgModule({
  declarations: [AboutUsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule
  ]
})
export class AboutAsModule { }
