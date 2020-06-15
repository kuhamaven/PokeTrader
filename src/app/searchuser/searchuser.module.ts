import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchuserRoutingModule } from './searchuser-routing.module';
import { SearchuserComponent } from './searchuser.component';
import {  SearchuserCardComponent} from '../searchuser-card/searchuser-card.component'


@NgModule({
  declarations: [SearchuserComponent, SearchuserCardComponent],
  imports: [
    CommonModule,
    SearchuserRoutingModule,
    
  ]
})
export class SearchuserModule { }
