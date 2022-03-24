import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SignupModule } from './modules/signup/signup.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SignupModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
