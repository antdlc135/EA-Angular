import { Attribute, Component, OnInit } from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ea-select-lang-mobile',
  templateUrl: './select-lang-mobile.component.html',
  styleUrls: ['./select-lang-mobile.component.scss'],
})
export class SelectLangMobileComponent implements OnInit {
  defaultCountryFlag: string =
    '../../assets/homePage/footer/bottomFooter/flags/it.png';
  defaultCountryName: string = 'Italia';
  langFlag!: string;
  langName!: string;
  flag!: any;
  newLangFromMobile!: any;
  @Input() title!: string;
  @Input() selectData!: any;
  @Input() priceMobOpened!: boolean;
  @Input() languageMobOpened!: boolean;
  @Input() langDeskName!: string;
  @Input() langDeskFlag!: string;
  @Output() changeLangMob = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.langMobileAnim();
    let langMobileSpan: any = document.querySelector('.lang-mobile-span');
    let langMobileFlag: any = document.querySelector('.lang-mobile-flag');
    langMobileSpan.innerText = this.defaultCountryName;
    // langMobileFlag.src = this.defaultCountryFlag;
  }
  changeCountry(event: any) {
    let MobilePriceSpan: any = document.querySelector(
      '#mob-price .lang-mobile-span'
    );
    let MobileLangSpan: any = document.querySelector(
      '#mob-lang .lang-mobile-span'
    );
    let langMobileFlag: any = document.querySelector(
      '#mob-lang .lang-mobile-flag'
    );
    if (this.priceMobOpened) {
      MobilePriceSpan.innerText = event.target.value;
    } else if (this.languageMobOpened) {
      MobileLangSpan.innerText = event.target.value;
      let option = event.target.selectedIndex;
      langMobileFlag.src = event.target.options.item(option).dataset.flag;
    }
  }

  langMobileAnim() {
    let langMobileSpan: any = document.querySelector('.lang-mobile-span');
    let langMobileFlag: any = document.querySelector('.lang-mobile-flag');
    let langMobileSelect: any = document.querySelector('.lang-mobile-select');
    let langMobileOptions: any = document.querySelectorAll(
      '.lang-mobile-options'
    );

    langMobileOptions.forEach((option: any, index: any) => {
      option.addEventListener('click', (event: any) => {
        console.log('click');
        if (index == event.target.selectedIndex) {
          langMobileSpan.innerText = option.innerText;
          langMobileFlag.src = option.dataset.img;
          this.langFlag = option.dataset.img;
          this.langName = option.innerText;
          this.newLangFromMobile = [this.langName, this.langFlag];
          this.changeLanguage();
        }
      });
    });
  }
  changeLanguage() {
    this.changeLangMob.emit(this.newLangFromMobile);
  }
}
