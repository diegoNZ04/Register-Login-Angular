import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home-component', pathMatch: 'full'},
  {path: 'home-component', component: HomeComponent},
  {path: 'register-component', component: RegisterComponent}
];


