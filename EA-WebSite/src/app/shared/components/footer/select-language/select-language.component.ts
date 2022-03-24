import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
} from '@angular/core';
@Component({
  selector: 'ea-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit, OnChanges {
  selectedLang!: string;
  langName!: string;
  changedCountry = false;
  langFlag!: string;
  @Input() title!: any;
  @Input() selectData!: any;
  @Input() languageOpened!: any;
  @Input() priceOpened!: any;
  @Input() priceMobile!: string;
  @Input() langFromMobile!: any;
  @Input() flagMobile!: any;
  @Output() langFromdesk = new EventEmitter<any>();
  @Output() priceDesk = new EventEmitter<string>();
  constructor() {}

  ngOnChanges() {
    if (this.langFromMobile) {
      this.langName = this.langFromMobile;
      this.langFlag = this.flagMobile;
    }
    if (this.priceMobile) {
      this.langName = this.priceMobile;
    }
  }
  ngOnInit(): void {
    if (!this.changedCountry) {
      this.langName = 'Italia';
      this.langFlag = '../../assets/homePage/footer/bottomFooter/flags/it.png';
      console.log(this.changedCountry);
    }
  }

  changeCountry(id: any, span: any, img: any, event: any) {
    if (this.priceOpened) {
      this.langName = event.target.innerText;
    } else if (this.languageOpened) {
      this.langName = span;
      this.langFlag = img;
    }
    localStorage.setItem('countryName', this.langName);
    let googleSelect: any = document.querySelector(
      '#google_translate_element select'
    );
    for (let i = 0; i < googleSelect.children.length; i++) {
      let option = googleSelect.children[i];
      if (option.value == id) {
        googleSelect.selectedIndex = i;
        googleSelect.dispatchEvent(new Event('change'));
        break;
      }
    }
    this.changedCountry = true;
    let lang = [this.langName, this.langFlag];
    this.langFromdesk.emit(lang);
    this.priceDesk.emit(this.langName);
  }
}