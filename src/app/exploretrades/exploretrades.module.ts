import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploretradesRoutingModule } from './exploretrades-routing.module';
import { ExploretradesComponent } from './exploretrades.component';
import { TradecomponentComponent } from './tradecomponent/tradecomponent.component';
import { BiddercardComponent } from './biddercard/biddercard.component';


@NgModule({
  declarations: [ExploretradesComponent, TradecomponentComponent, BiddercardComponent],
  imports: [
    CommonModule,
    ExploretradesRoutingModule
  ]
})
export class ExploretradesModule { }
