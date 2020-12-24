import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './shared/guards/login/login.guard'
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { UsersComponent } from './pages/users/users.component';


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
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [LoginGuard]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
