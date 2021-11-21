import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {AccordionPage} from './accordion.page';


const routes: Routes = [
  {
    path: '', component: AccordionPage
  }
];

@NgModule({
  declarations: [AccordionPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ]
})
export class AccordionModule { }
