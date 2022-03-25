import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  title = 'EA-WebSite';
  asideOp!: boolean;
  nav!: any;
  toBackGround!: any;

  ngOnInit() {
    this.toBackGround = document.querySelector('.toBackGround');
  }

  onclickAsideClose() {
    let aside: any = document.querySelector('aside');
    aside.style.left = '-410px';
    aside.style.top = '-30px';
    this.asideOp = false;
  }

  aside(x: boolean) {
    this.asideOp = x;
  }

  forSendNav(nav: any) {
    this.nav = nav;
  }

  scroll(header: any) {
    let prevScrollPos = window.scrollY;
    window.onscroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
        this.nav.style.top = '33px';
      } else {
        header.style.top = '-35px';
        this.nav.style.top = '-1px';
      }
      prevScrollPos = currentScrollPos;
    };
  }
}
