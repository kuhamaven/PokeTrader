import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytradesRoutingModule } from './mytrades-routing.module';
import { MytradesComponent } from './mytrades.component';
import { TradecomponentComponent} from '../tradecomponent/tradecomponent.component';


@NgModule({
  declarations: [MytradesComponent,TradecomponentComponent],
  imports: [
    CommonModule,
    MytradesRoutingModule,
    
  ]
})
export class MytradesModule { }
