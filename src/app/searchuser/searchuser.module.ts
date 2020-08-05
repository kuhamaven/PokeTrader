import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchuserRoutingModule } from './searchuser-routing.module';
import { SearchuserComponent } from './searchuser.component';
import {  SearchuserCardComponent} from '../searchuser-card/searchuser-card.component';
import { FriendcardComponent } from './friendcard/friendcard.component';
import { RequestcardComponent } from './requestcard/requestcard.component';
import { PendingrequestcardComponent } from './pendingrequestcard/pendingrequestcard.component'


@NgModule({
  declarations: [SearchuserComponent, SearchuserCardComponent, FriendcardComponent, RequestcardComponent, PendingrequestcardComponent],
  imports: [
    CommonModule,
    SearchuserRoutingModule,
    
  ]
})
export class SearchuserModule { }
