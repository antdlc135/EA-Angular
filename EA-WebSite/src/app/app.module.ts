import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './home-page/main/main.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { MainHeaderComponent } from './home-page/main/main-header/main-header.component';
import { MainBodyComponent } from './home-page/main/main-body/main-body.component';
import { MainCardsComponent } from './home-page/main/main-cards/main-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainComponent,
    HeaderComponent,
    AsideComponent,
    NavComponent,
    MainHeaderComponent,
    MainBodyComponent,
    MainCardsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
