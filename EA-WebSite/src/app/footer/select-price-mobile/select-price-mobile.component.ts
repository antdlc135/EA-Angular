import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-select-price-mobile',
  templateUrl: './select-price-mobile.component.html',
  styleUrls: ['./select-price-mobile.component.scss'],
})
export class SelectPriceMobileComponent implements OnInit {
  regions = [
    'Austria',
    'Belgio',
    'Croazia',
    'Cipro',
    'Repubblica Ceca',
    'Danimarca',
    'Estonia',
    'Finlandia',
    'Francia',
    'Germania',
    'Grecia',
    'Ungheria',
    'Islanda',
    'Irlanda',
    'Italia',
    'Lettonia',
    'Liechtenstein',
    'Lituania',
    'Lussemburgo',
    'Malta',
    'Paesi Bassi',
    'Norvegia',
    'Polonia',
    'Portogallo',
    'Romania',
    'Slovenia',
    'Spagna',
    'Svezia',
    'Svizzera',
  ];

  constructor() {}

  ngOnInit(): void {
    this.langMobileAnim();
  }
  ngOnChanges() {}

  langMobileAnim() {
    let langMobileSpan: any = document.querySelector('.lang-mobile-span');
    let langMobileFlag: any = document.querySelector('.lang-mobile-flag');
    let langMobileSelect: any = document.querySelector('.lang-mobile-select');
    let langMobileOptions: any = document.querySelectorAll(
      '.lang-mobile-options'
    );
    langMobileOptions.forEach((option: any, index: any) => {
      langMobileSelect.addEventListener('click', (event: any) => {
        console.log('click on select');
        if (index == event.target.selectedIndex) {
          langMobileSpan.innerText = option.innerText;
          langMobileFlag.src = option.dataset.img;
        }
      });
    });
  }
}
