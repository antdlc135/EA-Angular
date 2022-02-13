import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ea-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() headerTag: any = document.querySelector('header');
  constructor() {}

  ngOnInit(): void {
    this.header();
  }

  header() {
    let headerHeight: any = document.querySelector('.headerHeight');
    let headerSheets: any = document.querySelectorAll('.headerHeight> section');
    let closeHeader: any = document.querySelector('.headerHeight>.closeHeader');
    let accountSect: any = document.querySelector('#accountSect');
    let account: any = document.querySelector('#account');
    let help: any = document.querySelector('#help');
    let helpSect: any = document.querySelector('#helpSect');
    let headerSVGa: any = document.querySelectorAll('header > section');
    let EA: any = document.querySelector('header > a');

    EA.onmouseover = () => {
      EA.firstElementChild.setAttribute('fill', '#8B8B8B');
    };
    EA.onmouseout = () => {
      EA.firstElementChild.setAttribute('fill', '#5c5c5c');
    };

    let goDown = (el: any) => {
      el === accountSect
        ? (el.firstElementChild.style.opacity = 1)
        : (el.firstElementChild.nextElementSibling.style.opacity = 1);
      el.style.top = '50%';
    };
    let goUp = (el: any) => {
      el === accountSect
        ? (el.firstElementChild.style.opacity = 0)
        : (el.firstElementChild.nextElementSibling.style.opacity = 0);
      el.style.top = '-400px';
    };
    let goUpAll = () => {
      headerSheets.forEach((el: any) => {
        el.style.top = '-400px';
      });
    };

    let closeAll = () => {
      decolorHeadIcon();
      goUpAll();
      closeHeaderHeight();
    };

    let closeHeaderHeight = () => {
      closeHeader.style.opacity = 0;
      headerHeight.firstElementChild.style.transition = 'none';
      headerHeight.firstElementChild.style.opacity = 0;
      headerHeight.style.minHeight = 0;
      // nav.style.top = '33px';
      headerHeight.classList.remove('headerHeightShad');
      // body.style.overflow = 'scroll';
    };

    let openHeaderHeight = () => {
      closeHeader.style.opacity = 1;
      headerHeight.firstElementChild.style.transition = '500ms';
      headerHeight.firstElementChild.style.opacity = 1;
      if (window.pageYOffset != 0) {
        headerHeight.style.top = '-35px';
        // nav.style.top = '-1px';
      }
      headerHeight.style.minHeight = '25rem';
      headerHeight.classList.add('headerHeightShad');
      // body.style.overflow = 'hidden';
    };

    let decolorHeadIcon = () => {
      headerSVGa.forEach((el: any) => {
        el.firstElementChild.setAttribute('fill', '#9f9f9f');
      });
    };

    // header icon animation
    (function eachHeaderSVG() {
      headerSVGa.forEach((el: any) => {
        el.onclick = (ev: any) => {
          decolorHeadIcon();
          el.firstElementChild.setAttribute('fill', '#f3f3f3');
          openHeaderHeight();
          if (ev.target.id == account.id) {
            goDown(accountSect);
            goUp(helpSect);
          } else {
            goDown(helpSect);
            goUp(accountSect);
          }
          ev.target.onclick = () => {
            decolorHeadIcon();
            el.firstElementChild.setAttribute('fill', '#f3f3f3');
            if (
              (ev.target.id == account.id && accountSect.style.top == '50%') ||
              (ev.target.id == help.id && helpSect.style.top == '50%')
            ) {
              closeAll();
              return eachHeaderSVG();
            } else {
              if (ev.target.id == account.id) {
                goDown(accountSect);
                goUp(helpSect);
              } else {
                goDown(helpSect);
                goUp(accountSect);
              }
            }
          };
          // toBackGround.onclick = () => {
          //   closeAll();
          //   return eachHeaderSVG();
          // };
          closeHeader.onclick = () => {
            closeAll();
            return eachHeaderSVG();
          };
        };
      });
    })();
  }
}
