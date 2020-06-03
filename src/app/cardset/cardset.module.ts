import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsetRoutingModule } from './cardset-routing.module';
import { CardsetComponent } from './cardset.component';
import { CardComponent } from './../card/card.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [CardsetComponent, CardComponent],
  imports: [
    CommonModule,
    CardsetRoutingModule,
    MatSnackBarModule
  ]
})
export class CardsetModule { }
