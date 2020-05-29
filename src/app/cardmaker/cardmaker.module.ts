import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardmakerRoutingModule } from './cardmaker-routing.module';
import { CardmakerComponent } from './cardmaker.component';


@NgModule({
  declarations: [CardmakerComponent],
  imports: [
    CommonModule,
    CardmakerRoutingModule
  ]
})
export class CardmakerModule { }
