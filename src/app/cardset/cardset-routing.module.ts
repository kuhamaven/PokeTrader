import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsetComponent } from './cardset.component';

const routes: Routes = [{ path: '', component: CardsetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsetRoutingModule { }
