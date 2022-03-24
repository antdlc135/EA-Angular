import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectLanguageComponent } from './components/footer/select-language/select-language.component';
import { SelectLangMobileComponent } from './components/footer/select-lang-mobile/select-lang-mobile.component';

@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    SelectLanguageComponent,
    SelectLangMobileComponent,
  ],
  imports: [CommonModule],
  exports: [AsideComponent, FooterComponent, HeaderComponent],
})
export class SharedModule {}
