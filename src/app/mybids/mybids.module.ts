import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MybidsRoutingModule } from './mybids-routing.module';
import { MybidsComponent } from './mybids.component';
import { BidComponent } from './bid/bid.component';


@NgModule({
  declarations: [MybidsComponent, BidComponent],
  imports: [
    CommonModule,
    MybidsRoutingModule
  ]
})
export class MybidsModule { }
