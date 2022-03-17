import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'ea-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  selectData = [
    [
      {
        id: '',
        img: '',
        span: 'Austria',
      },
      {
        id: '',
        img: '',
        span: 'Belgio',
      },
      {
        id: '',
        img: '',
        span: 'Croazia',
      },
      {
        id: '',
        img: '',
        span: 'Cipro',
      },
      {
        id: '',
        img: '',
        span: 'Repubblica Ceca',
      },
      {
        id: '',
        img: '',
        span: 'Danimarca',
      },
      {
        id: '',
        img: '',
        span: 'Estonia',
      },
      {
        id: '',
        img: '',
        span: 'Finlandia',
      },
      {
        id: '',
        img: '',
        span: 'Francia',
      },
      {
        id: '',
        img: '',
        span: 'Germania',
      },
      {
        id: '',
        img: '',
        span: 'Grecia',
      },
      {
        id: '',
        img: '',
        span: 'Ungheria',
      },
      {
        id: '',
        img: '',
        span: 'Islanda',
      },
      {
        id: '',
        img: '',
        span: 'Irlanda',
      },
      {
        id: '',
        img: '',
        span: 'Italia',
      },
      {
        id: '',
        img: '',
        span: 'Lettonia',
      },
      {
        id: '',
        img: '',
        span: 'Liechtenstein',
      },
      {
        id: '',
        img: '',
        span: 'Lituania',
      },
      {
        id: '',
        img: '',
        span: 'Lussemburgo',
      },
      {
        id: '',
        img: '',
        span: 'Malta',
      },
      {
        id: '',
        img: '',
        span: 'Paesi Bassi',
      },
      {
        id: '',
        img: '',
        span: 'Norvegia',
      },
      {
        id: '',
        img: '',
        span: 'Polonia',
      },
      {
        id: '',
        img: '',
        span: 'Portogallo',
      },
      {
        id: '',
        img: '',
        span: 'Romania',
      },
      {
        id: '',
        img: '',
        span: 'Slovenia',
      },
      {
        id: '',
        img: '',
        span: 'Spagna',
      },
      {
        id: '',
        img: '',
        span: 'Svezia',
      },
      {
        id: '',
        img: '',
        span: 'Svizzera',
      },
    ],
    [
      {
        id: 'en',
        img: '../../assets/homePage/footer/bottomFooter/flags/us.png',
        span: 'United States',
      },
      {
        id: 'ru',
        img: '../../assets/homePage/footer/bottomFooter/flags/ru.png',
        span: 'Россия',
      },
      {
        id: 'no',
        img: '../../assets/homePage/footer/bottomFooter/flags/nor.png',
        span: 'Norge',
      },
      {
        id: 'en',
        img: '../../assets/homePage/footer/bottomFooter/flags/uk.png',
        span: 'United Kingdom',
      },
      {
        id: 'es',
        img: '../../assets/homePage/footer/bottomFooter/flags/es.png',
        span: 'España',
      },
      {
        id: 'sv',
        img: '../../assets/homePage/footer/bottomFooter/flags/sw.png',
        span: 'Sverige',
      },
      {
        id: 'en',
        img: '../../assets/homePage/footer/bottomFooter/flags/aus.png',
        span: 'Australia',
      },
      {
        id: 'cs',
        img: '../../assets/homePage/footer/bottomFooter/flags/ck.png',
        span: 'Česká republika',
      },
      {
        id: 'zh-CN',
        img: '',
        span: '中国',
      },
      {
        id: 'fr',
        img: '../../assets/homePage/footer/bottomFooter/flags/fr.png',
        span: 'France',
      },
      {
        id: 'en',
        img: '../../assets/homePage/footer/bottomFooter/flags/ca.png',
        span: 'Canada(En)',
      },
      {
        id: 'ko',
        img: '../../assets/homePage/footer/bottomFooter/flags/kr.png',
        span: '대한민국',
      },
      {
        id: 'de',
        img: '../../assets/homePage/footer/bottomFooter/flags/de.png',
        span: 'Deustschland',
      },
      {
        id: 'fr',
        img: '../../assets/homePage/footer/bottomFooter/flags/ca.png',
        span: 'Canada(Fr)',
      },
      {
        id: 'de',
        img: '../../assets/homePage/footer/bottomFooter/flags/de.png',
        span: 'Deustschland',
      },
      {
        id: 'zh-TW',
        img: '',
        span: '繁體中文',
      },
      {
        id: 'it',
        img: '../../assets/homePage/footer/bottomFooter/flags/it.png',
        span: 'Italia',
      },
      {
        id: 'da',
        img: '../../assets/homePage/footer/bottomFooter/flags/dan.png',
        span: 'Danmark',
      },
      {
        id: 'ja',
        img: '../../assets/homePage/footer/bottomFooter/flags/jp.png',
        span: '日本',
      },
      {
        id: 'pl',
        img: '../../assets/homePage/footer/bottomFooter/flags/pl.png',
        span: 'Polska',
      },
      {
        id: 'pt',
        img: '../../assets/homePage/footer/bottomFooter/flags/bl.png',
        span: 'Brasil',
      },
      {
        id: 'fi',
        img: '../../assets/homePage/footer/bottomFooter/flags/fin.png',
        span: 'Suomi',
      },
      {
        id: 'es',
        img: '../../assets/homePage/footer/bottomFooter/flags/mex.png',
        span: 'México',
      },
      {
        id: 'nl',
        img: '../../assets/homePage/footer/bottomFooter/flags/ne.png',
        span: 'Nederland',
      },
      {
        id: 'tk',
        img: '../../assets/homePage/footer/bottomFooter/flags/tr.png',
        span: 'Türkiye',
      },
    ],
  ];
  title = ['Prezzi Regionali', 'Lingua'];
  languageOpened = false;
  priceOpened = false;
  languageMobOpened = false;
  priceMobOpened = false;
  langNameFromMobile!: any;
  childData!: any;
  flags!: boolean;
  priceMobile!: any;
  langFromMobile!: any;
  flagMobile!: any;
  langDesk!: any;
  flagDesk!: any;
  priceFromDesk!: string;

  constructor() {}

  ngOnInit(): void {}
  clickMob(component: string) {
    if (component === 'price') {
      this.priceMobOpened = true;
      this.languageMobOpened = false;
    } else if (component === 'lang') {
      this.priceMobOpened = false;
      this.languageMobOpened = true;
    }
  }
  sendRegions() {
    if (this.priceOpened) {
      this.priceOpened = false;
    } else {
      this.priceOpened = true;
      this.languageOpened = false;
    }
  }
  sendLanguages() {
    if (this.languageOpened) {
      this.languageOpened = false;
    } else {
      this.languageOpened = true;
      this.priceOpened = false;
    }
  }
  languageFromMobile(data: any) {
    this.langFromMobile = data;
  }
  flagFromMobile(data: any) {
    this.flagMobile = data;
  }
  langFromDesk(data: any) {
    this.langDesk = data[0];
    this.flagDesk = data[1];
  }
  priceFromMobile(data: any) {
    this.priceMobile = data;
  }
  priceDesk(data: string) {
    this.priceFromDesk = data;
  }
}
