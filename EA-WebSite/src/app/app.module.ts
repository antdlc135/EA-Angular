import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { MainHeaderComponent } from './home-page/main-header/main-header.component';
import { MainBodyComponent } from './home-page/main-body/main-body.component';
import { MainCardsComponent } from './home-page/main-cards/main-cards.component';
import { PreFooterComponent } from './home-page/pre-footer/pre-footer.component';
import { FooterComponent } from './footer/footer.component';
import { SelectLangMobileComponent } from './footer/select-lang-mobile/select-lang-mobile.component';
import { SelectLanguageComponent } from './footer/select-language/select-language.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignupModule } from './modules/signup/signup.module';
import { AppContainerComponent } from './app-container.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AsideComponent,
    NavComponent,
    MainHeaderComponent,
    MainBodyComponent,
    MainCardsComponent,
    PreFooterComponent,
    SelectLangMobileComponent,
    SelectLanguageComponent,
    FooterComponent,
    AppContainerComponent,
  ],
  imports: [BrowserModule, SignupModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
