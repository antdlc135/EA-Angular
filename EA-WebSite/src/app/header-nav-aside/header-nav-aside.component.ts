import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-header-nav-aside',
  templateUrl: './header-nav-aside.component.html',
  styleUrls: ['./header-nav-aside.component.scss'],
})
export class HeaderNavAsideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.HeaderNav();
  }

  HeaderNav() {
    //header
    let header: any = document.querySelector('.stylePage> header');
    let headerHeight: any = document.querySelector(
      '.stylePage > header > .headerHeight'
    );
    let headerSheets: any = document.querySelectorAll(
      '.stylePage > header > .headerHeight> section'
    );
    let closeHeader: any = document.querySelector(
      '.stylePage> header>.headerHeight>.closeHeader'
    );
    let accountSect: any = document.querySelector('#accountSect');
    let account: any = document.querySelector('#account');
    let help: any = document.querySelector('#help');
    let helpSect: any = document.querySelector('#helpSect');
    let headerSVGa: any = document.querySelectorAll('header > section');
    let EA: any = document.querySelector('header > a');

    //nav
    let circleSup: any = window.document.querySelector('.circlesSuperPosition');
    let OpenOnPhone: any = document.querySelector('.OpenAsideOnPhone');
    let circle: any = document.querySelectorAll('.nav-circle');
    let std: any = circleSup!.firstElementChild;
    let big: any = std!.nextElementSibling;
    let aside: any = document.querySelector('.toBackGround > .aside');
    let blackBack: any = document.querySelector('.blackBack');
    let close: any = document.querySelector('.close-x');
    let closeRed: any = document.querySelector('[src*=close-red]');
    let nav: any = document.querySelector('.toBackGround > nav');
    let toBackGround: any = document.querySelector('.toBackGround');
    let divNavMenu: any = document.querySelectorAll('nav > .navMenu > div');
    let body: any = document.querySelector('body');
    let titleAside: any = document.querySelectorAll('.play .titleAside');

    // header
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
      header.style.top = '0';
      nav.style.top = '33px';
      headerHeight.classList.remove('headerHeightShad');
      body.style.overflow = 'scroll';
    };

    let openHeaderHeight = () => {
      closeHeader.style.opacity = 1;
      headerHeight.firstElementChild.style.transition = '500ms';
      headerHeight.firstElementChild.style.opacity = 1;
      if (window.pageYOffset != 0) {
        header.style.top = '-35px';
        nav.style.top = '-1px';
      }
      headerHeight.style.minHeight = '25rem';
      headerHeight.classList.add('headerHeightShad');
      body.style.overflow = 'hidden';
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
          toBackGround.onclick = () => {
            closeAll();
            return eachHeaderSVG();
          };
          closeHeader.onclick = () => {
            closeAll();
            return eachHeaderSVG();
          };
        };
      });
    })();

    // header-end

    titleAside.forEach((el: any) => {
      el.onmouseover = () => {
        el.firstElementChild.style.transform = 'scale(1.2)';
      };
      el.onmouseout = () => {
        el.firstElementChild.style.transform = 'unset';
      };
    });

    divNavMenu.forEach((el: any) => {
      el.onmouseover = () => {
        el.firstElementChild.nextElementSibling.style.transform = 'rotateX(0)';
        el.firstElementChild.nextElementSibling.setAttribute('fill', 'red');
        el.style.color = '#ff4747';
        el.firstElementChild.firstElementChild.style.maxHeight = '320px';
        el.firstElementChild.firstElementChild
          .querySelectorAll('section')
          .forEach((element: any) => {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
          });
      };
    });
    divNavMenu.forEach((el: any) => {
      el.onmouseout = () => {
        el.firstElementChild.nextElementSibling.style.transform =
          'rotateX(180deg)';
        el.firstElementChild.nextElementSibling.setAttribute('fill', 'intial');
        el.style.color = 'initial';
        el.firstElementChild.firstElementChild.style.maxHeight = '0';
        el.firstElementChild.firstElementChild
          .querySelectorAll('section')
          .forEach((element: any) => {
            element.style.opacity = 0;
            element.style.visibility = 'hidden';
          });
      };
    });

    circleSup.onmouseover = () => {
      std.style.opacity = 0;
      big.style.opacity = 1;
      circle.forEach((element: any) => {
        element.style.backgroundColor = '#ff4747';
      });
    };
    circleSup.onmouseout = () => {
      std.style.opacity = 1;
      big.style.opacity = 0;
      circle.forEach((element: any) => {
        element.style.backgroundColor = 'black';
      });
    };

    function onclickAsideOpen() {
      header.style.top = '0';
      nav.style.top = '33px';
      blackBack.style.zIndex = 8;
      aside.style.left = '0';
      aside.style.top = '0';
      body.style.overflow = 'hidden';
      blackBack.onclick = () => {
        if (window.pageYOffset != 0) {
          header.style.top = '-35px';
          nav.style.top = '-1px';
        }
        aside.style.left = '-410px';
        aside.style.top = '-30px';
        blackBack.style.zIndex = -1;
        body.style.overflow = 'scroll';
      };
    }

    circleSup.onclick = onclickAsideOpen;
    OpenOnPhone.onclick = onclickAsideOpen;

    close.onmouseover = () => {
      closeRed.style.opacity = 1;
      closeRed.previousElementSibling.style.opacity = 0;
    };
    close.onmouseout = () => {
      closeRed.style.opacity = 0;
      closeRed.previousElementSibling.style.opacity = 1;
    };
    close.onclick = () => {
      aside.style.left = '-410px';
      aside.style.top = '-30px';
      if (window.pageYOffset != 0) {
        header.style.top = '-35px';
        nav.style.top = '-1px';
      }
      blackBack.style.zIndex = -1;
      body.style.overflow = 'scroll';
    };

    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
        nav.style.top = '33px';
      } else {
        header.style.top = '-35px';
        nav.style.top = '-1px';
      }
      prevScrollPos = currentScrollPos;
    };
  }
}
