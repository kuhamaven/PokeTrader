import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsetRoutingModule } from './cardset-routing.module';
import { CardsetComponent } from './cardset.component';
import { CardComponent } from './../card/card.component';


@NgModule({
  declarations: [CardsetComponent, CardComponent],
  imports: [
    CommonModule,
    CardsetRoutingModule
    ]
})
export class CardsetModule { }
