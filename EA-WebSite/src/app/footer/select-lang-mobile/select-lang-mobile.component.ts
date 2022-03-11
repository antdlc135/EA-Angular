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
    this.countryName = event.target.value;
    let option = event.target.selectedIndex;
    this.countryFlag = event.target.options.item(option).dataset.flag;
  }
}
