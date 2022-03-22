import { Component } from '@angular/core';

@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EA-WebSite';
  asideOp!: boolean;
  nav!: any;
  toBackGround!: any;

  ngOnInit() {
    this.toBackGround = document.querySelector('.toBackGround');
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
