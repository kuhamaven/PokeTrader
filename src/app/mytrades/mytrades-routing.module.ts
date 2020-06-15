import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytradesComponent } from './mytrades.component';

const routes: Routes = [{ path: '', component: MytradesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytradesRoutingModule { }
