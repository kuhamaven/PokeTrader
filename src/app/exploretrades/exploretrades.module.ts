import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploretradesRoutingModule } from './exploretrades-routing.module';
import { ExploretradesComponent } from './exploretrades.component';
import { TradecomponentComponent } from './tradecomponent/tradecomponent.component';
import { BidcreatorcomponentComponent } from './bidcreatorcomponent/bidcreatorcomponent.component';
import { BiddercardComponent } from './biddercard/biddercard.component';


@NgModule({
  declarations: [ExploretradesComponent, TradecomponentComponent, BidcreatorcomponentComponent, BiddercardComponent],
  imports: [
    CommonModule,
    ExploretradesRoutingModule
  ]
})
export class ExploretradesModule { }
