import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePage} from './home.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import { SocialCardComponent } from './components/social-card/social-card.component';
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [{path: '', component: HomePage}]

@NgModule({
  declarations: [HomePage, SocialCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatIconModule,
    ]
})
export class HomeModule { }
