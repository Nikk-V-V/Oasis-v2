import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmptyPage} from './empty.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

const routes: Routes = [{
  path: '', component: EmptyPage
}];

@NgModule({
  declarations: [EmptyPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
})
export class EmptyModule { }
