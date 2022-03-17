import { Attribute, Component, OnInit } from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ea-select-lang-mobile',
  templateUrl: './select-lang-mobile.component.html',
  styleUrls: ['./select-lang-mobile.component.scss'],
})
export class SelectLangMobileComponent implements OnInit {
  countryFlag: string =
    '../../assets/homePage/footer/bottomFooter/flags/it.png';
  countryName = 'Italia';
  @Input() title!: string;
  @Input() selectData!: any;
  @Input() priceMobOpened!: boolean;
  @Input() languageMobOpened!: boolean;

  constructor() {}

  ngOnInit(): void {}
  changeCountry(event: any) {
    let option = event.target.selectedIndex;
    this.countryName = event.target.options.item(option).dataset.span;
    this.countryFlag = event.target.options.item(option).dataset.flag;
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

    console.log(event.target.options.item(option).dataset.id);
  }
}
