import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradecreatorComponent } from './tradecreator.component';

const routes: Routes = [{ path: '', component: TradecreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradecreatorRoutingModule { }
