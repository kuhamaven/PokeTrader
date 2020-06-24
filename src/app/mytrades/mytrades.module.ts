import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytradesRoutingModule } from './mytrades-routing.module';
import { MytradesComponent } from './mytrades.component';
import { TradecomponentComponent} from '../tradecomponent/tradecomponent.component';
import { BidcomponentComponent } from './bidcomponent/bidcomponent.component';


@NgModule({
  declarations: [MytradesComponent,TradecomponentComponent, BidcomponentComponent],
  imports: [
    CommonModule,
    MytradesRoutingModule,
    
  ]
})
export class MytradesModule { }
