import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { UsersComponent } from './layout/users/users.component';
import { HeaderComponent } from './layout/components/header/header.component';

import { FormsModule } from '@angular/forms'; // import angular form module
import { HttpClientModule } from '@angular/common/http'; // import http module

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
