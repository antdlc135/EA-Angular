import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ea-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output() asideOpen: EventEmitter<any> = new EventEmitter();
  constructor() {}
  // @Output() navIn!:any;

  ngOnInit(): void {
    this.nav();
  }

  nav() {
    let circleSup: any = window.document.querySelector('.circlesSuperPosition');
    let circle: any = document.querySelectorAll('.nav-circle');
    let std: any = circleSup.firstElementChild;
    let big: any = std.nextElementSibling;
    // let toBackGround: any = document.querySelector('.toBackGround');
    let divNavMenu: any = document.querySelectorAll('nav > .navMenu > div');
    // let OpenOnPhone = document.querySelector('.OpenAsideOnPhone');

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

    // circleSup.onclick = onclickAsideOpen;
    // OpenOnPhone.onclick = onclickAsideOpen;
  }
  openAside() {
    this.asideOpen.emit(true);
  }
}
