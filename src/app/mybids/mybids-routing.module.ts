import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MybidsComponent } from './mybids.component';

const routes: Routes = [{ path: '', component: MybidsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MybidsRoutingModule { }
