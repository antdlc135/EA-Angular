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

    let divNavMenu: any = document.querySelectorAll('nav > .navMenu > div');
    let titleAside: any = document.querySelectorAll('.play .titleAside');

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
