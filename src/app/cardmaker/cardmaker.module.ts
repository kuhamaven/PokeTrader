import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardmakerRoutingModule } from './cardmaker-routing.module';
import { CardmakerComponent } from './cardmaker.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CardmakerComponent],
  imports: [
    CommonModule,
    CardmakerRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CardmakerModule { }
