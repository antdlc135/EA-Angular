import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let btn = document.querySelectorAll('.mainBody .title');
    btn.forEach((el: any) => {
      el.onmouseover = () => {
        el.previousElementSibling.style.opacity = 1;
        el.firstElementChild.style.transform = 'translate(0, -50px)';
        el.onmouseout = () => {
          el.previousElementSibling.style.opacity = 0;
          el.firstElementChild.style.transform = 'translate(0, 0)';
        };
      };
    });

    let card = document.querySelectorAll('.tab');
    card.forEach((el: any) => {
      el.onmouseover = () => {
        el.style.setProperty('--opacity', 1);
        el.style.transform = 'translate(0, -10px)';
        el.onmouseout = () => {
          el.style.setProperty('--opacity', '0');
          el.style.transform = 'translate(0, 0)';
        };
      };
    });
  }
}
