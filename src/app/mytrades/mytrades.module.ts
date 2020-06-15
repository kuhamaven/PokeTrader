import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytradesRoutingModule } from './mytrades-routing.module';
import { MytradesComponent } from './mytrades.component';


@NgModule({
  declarations: [MytradesComponent],
  imports: [
    CommonModule,
    MytradesRoutingModule
  ]
})
export class MytradesModule { }
