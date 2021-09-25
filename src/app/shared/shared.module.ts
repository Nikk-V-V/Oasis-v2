import {NgModule} from '@angular/core';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { SharesWindowComponent } from './components/card/shares-window/shares-window.component';
import {MatDialogModule} from "@angular/material/dialog";
import { UpdateWindowComponent } from './components/update-window/update-window.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    CardComponent,
    SharesWindowComponent,
    UpdateWindowComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
        MatDialogModule,
    ],
  providers: [],
    exports: [ToolbarComponent, CardComponent],
})
export class SharedModule {}
