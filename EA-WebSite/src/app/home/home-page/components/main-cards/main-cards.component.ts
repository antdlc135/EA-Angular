import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.scss'],
})
export class MainCardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let btn = document.querySelectorAll('.mainNavButt> .cover');
    let cardsSheets: any = [];
    document.querySelectorAll('.cards>section').forEach((el: any) => {
      cardsSheets.push(el);
    });
    let check = btn[0];

    function decolorButttons() {
      btn.forEach((el: any) => {
        el.parentElement.classList.remove('mainNavBackground');
        el.nextElementSibling.firstElementChild.style.borderBottom = '0';
      });
      cardsSheets.forEach((sheet: any) => {
        sheet.style.display = 'none';
      });
    }

    decolorButttons();

    function onclickAndDefault(el: any) {
      decolorButttons();
      el.parentElement.classList.add('mainNavBackground');
      el.nextElementSibling.firstElementChild.style.borderBottom =
        '3px solid #ff4747';
      let sheet = cardsSheets.find(
        (elem: any) => elem.dataset.info === el.dataset.info
      );
      let sheetCards = sheet.children;
      for (let i = 0; i < sheetCards.length; i++) {
        sheetCards[i].style.transform = 'translateY(-10px)';
        sheetCards[i].style.setProperty('--opacity', 1);
      }
      sheet.style.display = 'grid';
      setTimeout(() => {
        for (let i = 0; i < sheetCards.length; i++) {
          sheetCards[i].style.transform = 'translateY(0)';
          sheetCards[i].style.setProperty('--opacity', 0);
        }
      }, 200);
      check = el;
    }

    onclickAndDefault(check);

    btn.forEach((el: any) => {
      debugger;
      el.onclick = () => {
        if (check !== el) {
          onclickAndDefault(el);
        }
      };
      el.onmouseover = () => {
        el.parentElement.classList.add('mainNavBackground');
      };
      el.onmouseout = () => {
        if (check === el) {
          el.parentElement.classList.add('mainNavBackground');
        } else {
          el.parentElement.classList.remove('mainNavBackground');
        }
      };
    });
  }
}
