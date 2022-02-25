import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-select-price',
  templateUrl: './select-price.component.html',
  styleUrls: ['./select-price.component.scss'],
})
export class SelectPriceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.priceAnim();
  }

  priceAnim() {
    let onclickSelectionPrice: any = document.querySelector(
      '.onclick-selection-price'
    );
    let selectionPrice: any = document.querySelector('.selection-price');
    let selectionContainerPrice: any = document.querySelector(
      '.selection-container-price'
    );
    let arrow: any = document.querySelector('#down-arrow-price');
    let selected: any = document.querySelector('.selected-price');
    let selectedCountry: any = document.querySelector('.country-name-price');
    let countries: any = document.querySelectorAll('.flags-price > span');
    let clicked: any = document.querySelectorAll('.flags-price > span > img');

    selected.onmouseover = () => {
      selectionContainerPrice.style.transform = 'scale(1.1)';
      selectionContainerPrice.style.transition = '300ms';
    };
    selected.onmouseout = () => {
      selectionContainerPrice.style.transform = 'scale(1)';
      selectionContainerPrice.style.transition = '300ms';
    };
    let selectOpen = false;
    selectionPrice.onclick = () => {
      if (onclickSelectionPrice.style.visibility == 'visible') {
        selectionContainerPrice.style.boxShadow = 'none';
        onclickSelectionPrice.style.visibility = 'hidden';
        arrow.style.transform = 'rotateX(0)';
        selectionContainerPrice.style.borderTop =
          '2px solid rgb(194, 194, 194)';
        selectOpen = false;
      } else {
        arrow.style.transform = 'rotateX(180deg)';
        onclickSelectionPrice.style.visibility = 'visible';
        selectionContainerPrice.style.boxShadow =
          '0 14px 20px 0 rgba(0, 0, 0, 0.16)';
        selectionContainerPrice.style.borderTop = '#f3f3f3';
        selectOpen = true;
      }
    };
    function removeCheck(check: any) {
      check.lastChild.style.visibility = 'hidden';
      console.log(check);
    }
    function addCheck(check: any) {
      check.lastChild.style.visibility = 'visible';
    }
    let previousSelected!: any;
    countries.forEach((country: any) => {
      country.onclick = () => {
        if (!previousSelected) {
          selectedCountry.innerText = country.innerText;
          // country.lastChild.style.visibility = 'visible';
          previousSelected = country;
        } else {
          selectedCountry.innerText = country.innerText;
          previousSelected.lastChild.style.visibility = 'hidden';
          country.lastChild.style.visibility = 'visible';
          previousSelected = country;
        }
        if (selectOpen) {
          removeCheck(country);
        } else {
          addCheck(country);
        }
      };
    });
  }
}
