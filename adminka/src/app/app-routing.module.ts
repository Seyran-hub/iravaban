import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './shared/guards/login/login.guard'
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServiceComponent } from './pages/service/service.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'service',
    component: ServiceComponent,
    canActivate: [LoginGuard]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
