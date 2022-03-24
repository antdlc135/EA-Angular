import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './home-page/components/nav/nav.component';
import { MainHeaderComponent } from './home-page/components/main-header/main-header.component';
import { MainBodyComponent } from './home-page/components/main-body/main-body.component';
import { MainCardsComponent } from './home-page/components/main-cards/main-cards.component';
import { PreFooterComponent } from './home-page/components/pre-footer/pre-footer.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    NavComponent,
    MainHeaderComponent,
    MainBodyComponent,
    MainCardsComponent,
    PreFooterComponent,
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [
    HomePageComponent,
    NavComponent,
    MainHeaderComponent,
    MainBodyComponent,
    MainCardsComponent,
    PreFooterComponent,
  ],
})
export class HomeModule {}
