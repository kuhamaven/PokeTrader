import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchuserComponent } from './searchuser.component';


const routes: Routes = [{ path: '', component: SearchuserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchuserRoutingModule { }
