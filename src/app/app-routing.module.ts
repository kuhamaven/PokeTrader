import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, 
  { 
    path: 'cardset', 
    loadChildren: () => import('./cardset/cardset.module').then(m => m.CardsetModule)
  },
  { 
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'cardmaker', loadChildren: () => import('./cardmaker/cardmaker.module').then(m => m.CardmakerModule) },
  { path: 'searchuser', loadChildren: () => import('./searchuser/searchuser.module').then(m => m.SearchuserModule) },
  { path: 'tradecreator', loadChildren: () => import('./tradecreator/tradecreator.module').then(m => m.TradecreatorModule) },
  { path: 'mytrades', loadChildren: () => import('./mytrades/mytrades.module').then(m => m.MytradesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
