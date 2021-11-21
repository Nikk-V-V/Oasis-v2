import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { SharedModule } from 'src/app/shared/shared.module';
import {VideoStudyPage} from "./video-study.page";


const routes: Routes = [
  {
    path: '', component: VideoStudyPage
  }
]

@NgModule({
  declarations: [VideoStudyPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ]
})
export class VideoStudyModule { }
