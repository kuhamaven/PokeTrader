import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradecreatorRoutingModule } from './tradecreator-routing.module';
import { TradecreatorComponent } from './tradecreator.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TradecreatorComponent],
  imports: [
    CommonModule,
    TradecreatorRoutingModule,
    ReactiveFormsModule
  ]
})
export class TradecreatorModule { }
