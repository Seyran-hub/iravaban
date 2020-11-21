import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './shared/guards/login/login.guard'

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent, 
    canActivate: [LoginGuard],
    
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  { path: 'login', component: LoginComponent},
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
