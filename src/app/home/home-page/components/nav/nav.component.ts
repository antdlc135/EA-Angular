import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ea-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output() asideOpen: EventEmitter<any> = new EventEmitter();
  @Output() navTag: EventEmitter<any> = new EventEmitter();
  constructor() {}
  // @Output() navIn!:any;

  ngOnInit(): void {
    this.nav();
  }

  nav() {
    const navTag: any = document.querySelector('nav');
    let circleSup: any = document.querySelector('.circlesSuperPosition');
    let circle: any = document.querySelectorAll('.nav-circle');
    let std: any = circleSup.firstElementChild;
    let big: any = std.nextElementSibling;
    let divNavMenu: any = document.querySelectorAll('nav > .navMenu > div');
    // let OpenOnPhone = document.querySelector('.OpenAsideOnPhone');

    this.navTag.emit(navTag);

    divNavMenu.forEach((el: any) => {
      el.onmouseover = () => {
        el.firstElementChild.nextElementSibling.style.transform = 'rotateX(0)';
        el.firstElementChild.nextElementSibling.setAttribute('fill', 'red');
        el.style.color = '#ff4747';
      };
    });
    divNavMenu.forEach((el: any) => {
      el.onmouseout = () => {
        el.firstElementChild.nextElementSibling.style.transform =
          'rotateX(180deg)';
        el.firstElementChild.nextElementSibling.setAttribute('fill', 'intial');
        el.style.color = 'initial';
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
    debugger;
    this.asideOpen.emit(true);
  }
}
