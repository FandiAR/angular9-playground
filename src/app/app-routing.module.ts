import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { UsersComponent } from './layout/users/users.component'

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'users',  component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
