import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CollectionCardComponent } from '../collection-card/collection-card.component';


@NgModule({
  declarations: [ProfileComponent, CollectionCardComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ]
})


export class ProfileModule { 
  photoURL: string;

  ngOnInit() {
    
  }

}

