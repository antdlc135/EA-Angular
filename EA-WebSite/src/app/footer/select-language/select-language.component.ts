import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { SelectService } from '../shared/select.service';
@Component({
  selector: 'ea-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit {
  selectedLang!: any;
  langName = 'Italia';
  langFlag = '../../assets/homePage/footer/bottomFooter/flags/it.png';
  @Input() title!: any;
  @Input() selectData!: any;
  @Input() languageOpened!: any;
  @Input() priceOpened!: any;
  @Output() changeLang = new EventEmitter();
  @Input() langNameFromMobile!: any;
  constructor() {}

  ngOnInit(): void {}

  change(): void {
    this.changeLang.emit(this.selectedLang);
  }
  changeCountry(span: any, img: any, event: any) {
    if (this.priceOpened) {
      this.langName = event.target.innerText;
    } else if (this.languageOpened) {
      this.langName = event.target.innerText;
      this.langFlag = img;
    }
  }
}
