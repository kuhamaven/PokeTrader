import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradecreatorRoutingModule } from './tradecreator-routing.module';
import { TradecreatorComponent } from './tradecreator.component';
import { HostcardComponent } from '../trade/hostcard/hostcard.component';
import { WillingtoacceptcardComponent } from '../trade/willingtoacceptcard/willingtoacceptcard.component';


@NgModule({
  declarations: [TradecreatorComponent, HostcardComponent, WillingtoacceptcardComponent],
  imports: [
    CommonModule,
    TradecreatorRoutingModule
  ]
})
export class TradecreatorModule { }
