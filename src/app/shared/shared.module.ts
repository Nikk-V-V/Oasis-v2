import {NgModule} from '@angular/core';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ToolbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
    exports: [ToolbarComponent, CardComponent],
})
export class SharedModule {}
