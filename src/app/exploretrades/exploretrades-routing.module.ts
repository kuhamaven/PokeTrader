import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploretradesComponent } from './exploretrades.component';

const routes: Routes = [{ path: '', component: ExploretradesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploretradesRoutingModule { }
