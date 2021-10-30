import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuoteComponent} from './quote.component';


const routes: Routes = [{path: '', component: QuoteComponent}];

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class QuoteModule { }
