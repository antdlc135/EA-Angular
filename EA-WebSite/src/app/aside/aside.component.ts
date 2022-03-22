import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ea-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit, OnChanges {
  @Input() asideOp!: boolean;
  @Output() asideClose: EventEmitter<boolean> = new EventEmitter();
  // @Input() headerTag!: any;
  // @Input() navIn!: any;
  constructor() {}

  ngOnInit(): void {
    let close: any = document.querySelector('.close-x');
    let closeRed: any = document.querySelector('[src*=close-red]');
    let titleAside = document.querySelectorAll('.play .titleAside');

    close.onmouseover = () => {
      closeRed.style.opacity = 1;
      closeRed.previousElementSibling.style.opacity = 0;
    };
    close.onmouseout = () => {
      closeRed.style.opacity = 0;
      closeRed.previousElementSibling.style.opacity = 1;
    };

    titleAside.forEach((el: any) => {
      el.onmouseover = () => {
        el.firstElementChild.style.transform = 'scale(1.2)';
      };
      el.onmouseout = () => {
        el.firstElementChild.style.transform = 'unset';
      };
    });
  }

  ngOnChanges(): void {
    if (this.asideOp) {
      this.onclickAsideOpen();
    }
  }

  onclickAsideOpen() {
    let aside: any = document.querySelector('aside');
    // header.style.top = '0';
    // nav.style.top = '33px';
    // blackBack.style.zIndex = 8;
    aside.style.left = '0';
    aside.style.top = '0';
    // body.style.overflow = 'hidden';
    // blackBack.onclick = () => {
    //   if (window.pageYOffset != 0) {
    //     header.style.top = '-35px';
    //     nav.style.top = '-1px';
    //   }
    //   aside.style.left = '-410px';
    //   aside.style.top = '-30px';
    //   blackBack.style.zIndex = -1;
    //   body.style.overflow = 'scroll';
    // };
  }

  onclickAsideClose() {
    let aside: any = document.querySelector('aside');
    aside.style.left = '-410px';
    aside.style.top = '-30px';
    this.asideClose.emit(false);
    // if (window.pageYOffset != 0) {
    //   header.style.top = "-35px";
    //   nav.style.top = "-1px";
    // }
    // blackBack.style.zIndex = -1;
    // body.style.overflow = "scroll";
  }
}
