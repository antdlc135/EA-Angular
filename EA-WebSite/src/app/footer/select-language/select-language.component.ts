import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() langMobFlag!: any;
  @Input() langMobName!: any;
  @Output() changeLang = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    let selectedName: any = document.querySelector('.country-name');
    let selectedFlag: any = document.querySelector('.selected img');
    this.selectAnim();
    selectedName.innerText = this.defaultCountryName;
    selectedFlag.src = this.defaultCountryFlag;
  }

  ngOnChanges() {
    let selectedName: any = document.querySelector('.country-name');
    let selectedFlag: any = document.querySelector('.selected img');
    selectedName.innerText = this.langMobName;
    selectedFlag.src = this.langMobFlag;
  }
  change(): void {
    this.changeLang.emit(this.selectedLang);
  }

  selectAnim() {
    const languages: any = document.querySelectorAll('.flag');
    let onclickSelection: any = document.querySelector('.onclick-selection');
    let selection: any = document.querySelector('.selection');
    let selectionContainer: any = document.querySelector(
      '.selection-container'
    );
    let arrow: any = document.querySelector('#down-arrow');
    let body: any = document.querySelector('body');
    let allFlags: any = document.querySelectorAll('.flag');
    let selected: any = document.querySelector('.selected');
    let defaultCheck: any = document.getElementById('default-check');
    let socialIcons: any = document.querySelectorAll('.social-icons > svg');
    let selectedName: any = document.querySelector('.country-name');
    let selectedFlag: any = document.querySelector('.selected img');

    selected.onmouseover = () => {
      selectionContainer.style.transform = 'scale(1.1)';
      selectionContainer.style.transition = '300ms';
    };
    selected.onmouseout = () => {
      selectionContainer.style.transform = 'scale(1)';
      selectionContainer.style.transition = '300ms';
    };
    languages.forEach((language: any) => {
      language.onclick = () => {
        selectedName.innerHTML = language.dataset.span;
        selectedFlag.src = language.dataset.img;
        selectedFlag.style.width = '20px';
        selectedFlag.style.height = '11px';
        this.selectedLang = [selectedName.innerHTML, selectedFlag.src];
        this.change();
      };
    });

    selection.onclick = () => {
      // document.addEventListener('click', (event: any) => {
      //   if (
      //     onclickSelection.style.visibility == 'visible' &&
      //     event.target != onclickSelection
      //   ) {
      //     onclickSelection.style.visibility = 'hidden';
      //     defaultCheck.style.visibility = 'hidden';
      //     selected.style.boxShadow = 'none';
      //     arrow.style.transform = 'rotateX(0)';
      //     selectionContainer.style.borderTop = '2px solid rgb(194, 194, 194)';
      //   }
      // });
      if (onclickSelection.style.visibility == 'visible') {
        defaultCheck.style.visibility = 'hidden';
        selectionContainer.style.boxShadow = 'none';
        onclickSelection.style.visibility = 'hidden';
        arrow.style.transform = 'rotateX(0)';
        selectionContainer.style.borderTop = '2px solid rgb(194, 194, 194)';
      } else {
        arrow.style.transform = 'rotateX(180deg)';
        defaultCheck.style.visibility = 'visible';
        onclickSelection.style.visibility = 'visible';
        selectionContainer.style.boxShadow =
          '0 14px 20px 0 rgba(0, 0, 0, 0.16)';
        selectionContainer.style.borderTop = '#f3f3f3';
      }
    };
    let checked!: any;
    for (let flag of allFlags) {
      flag.addEventListener('click', () => {
        if (!checked) {
          checked = document.createElement('img');
          checked.setAttribute(
            'src',
            '../../assets/homePage/footer/bottomFooter/check.png'
          );
          checked.setAttribute('width', '18px');
          checked.setAttribute('height', '18px');
          checked.setAttribute('float', 'right');
          defaultCheck.style.display = 'none';
          flag.append(checked);
        } else {
          checked.remove();
          checked = document.createElement('img');
          checked.setAttribute(
            'src',
            '../../assets/homePage/footer/bottomFooter/check.png'
          );
          checked.setAttribute('width', '18px');
          checked.setAttribute('height', '18px');
          checked.setAttribute('float', 'right');
          flag.append(checked);
          defaultCheck.style.display = 'none';
        }
      });
    }
  }
  ngOnchange(): void {}
}
