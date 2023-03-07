import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {TilesPage} from './tiles.page';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  {
    path: '', component: TilesPage
  }
];

@NgModule({
  declarations: [TilesPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatIconModule,
        MatButtonModule,
    ]
})
export class TilesModule { }
