import { Component, OnChanges, OnInit } from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ea-select-lang-mobile',
  templateUrl: './select-lang-mobile.component.html',
  styleUrls: ['./select-lang-mobile.component.scss'],
})
export class SelectLangMobileComponent implements OnInit, OnChanges {
  countryFlag: string =
    '../../assets/homePage/footer/bottomFooter/flags/it.png';
  countryName = 'Italia';
  @Input() title!: string;
  @Input() selectData!: any;
  @Input() priceMobOpened!: boolean;
  @Input() languageMobOpened!: boolean;
  @Input() langDesk!: any;
  @Input() flagDesk!: any;
  @Input() priceFromDesk!: string;
  @Output() languageFromMobile = new EventEmitter<any>();
  @Output() flagFromMobile = new EventEmitter<any>();
  @Output() priceMobile = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {
    if (this.langDesk) {
      this.countryName = this.langDesk;
      this.countryFlag = this.flagDesk;
    }
    if (this.priceFromDesk) {
      this.countryName = this.priceFromDesk;
    }
  }

  ngOnInit(): void {}
  changeCountry(event: any) {
    let option = event.target.selectedIndex;

    // this.countryName = event.target.options.item(option).dataset.span;
    // this.countryFlag = event.target.options.item(option).dataset.flag;
    let googleSelect: any = document.querySelector(
      '#google_translate_element select'
    );
    for (let i = 0; i < googleSelect.children.length; i++) {
      let option2 = googleSelect.children[i];
      if (option2.value == event.target.options.item(option).dataset.id) {
        googleSelect.selectedIndex = i;
        console.log(i);
        googleSelect.dispatchEvent(new Event('change'));
        break;
      }
    }

    this.languageFromMobile.emit(this.countryName);
    this.flagFromMobile.emit(this.countryFlag);
  }
}
