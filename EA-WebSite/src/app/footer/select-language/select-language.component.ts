import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { flattenDiagnosticMessageText } from 'typescript';
import { SelectService } from '../shared/select.service';
@Component({
  selector: 'ea-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit {
  defaultCountryFlag: string =
    '../../assets/homePage/footer/bottomFooter/flags/it.png';
  defaultCountryName: string = 'Italia';
  selectedLang!: any;
  languages!: any;
  @Input() title!: any;
  @Input() childData!: any;
  @Input() regions!: any;
  @Input() selectData!: any;
  @Input() languageOpened!: any;
  @Input() priceOpened!: any;
  @Input() langMobFlag!: any;
  @Input() langMobName!: any;
  @Output() changeLang = new EventEmitter();
  constructor(private selectService: SelectService) {}

  ngOnInit(): void {
    this.selectAnim();
  }

  change(): void {
    this.changeLang.emit(this.selectedLang);
  }
  changeCountry(span: any, img: any, event: any) {
    let namePrice: any = document.querySelector('#price .country-name');
    let nameLang: any = document.querySelector('#lang .country-name');
    let imgLang: any = document.querySelector('#lang .selected img');
    if (this.priceOpened) {
      namePrice.innerText = event.target.innerText;
    } else if (this.languageOpened) {
      nameLang.innerText = event.target.innerText;
      imgLang.src = img;
    }
  }

  selectAnim() {
    let defaultCheck: any = document.getElementById('default-check');

    let checked!: any;
    // for (let flag of allFlags) {
    //   flag.addEventListener('click', () => {
    //     console.log('check');
    //     if (!checked) {
    //       checked = document.createElement('img');
    //       defaultCheck.style.display = 'none';
    //     } else {
    //       checked.remove();
    //       checked = document.createElement('img');
    //       checked.setAttribute(
    //         'src',
    //         '../../assets/homePage/footer/bottomFooter/check.png'
    //       );
    //       checked.setAttribute('width', '18px');
    //       checked.setAttribute('height', '18px');
    //       checked.setAttribute('float', 'right');
    //       flag.append(checked);
    //       defaultCheck.style.display = 'none';
    //     }
    //   });
    // }
  }
  ngOnchange(): void {}
}
