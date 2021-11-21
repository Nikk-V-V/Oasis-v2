import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { SharedModule } from 'src/app/shared/shared.module';
import {VideosPage} from "./videos.page";


const routes: Routes = [
  {
    path: '', component: VideosPage
  }
]

@NgModule({
  declarations: [VideosPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ]
})
export class VideosModule { }
