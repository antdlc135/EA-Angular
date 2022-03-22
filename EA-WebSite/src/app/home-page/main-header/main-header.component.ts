import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let mainButton = document.querySelectorAll('.mainButton');

    mainButton.forEach((el: any) => {
      el.onmouseover = () => {
        el.lastElementChild.style.transform = 'scale(1.1)';
        el.onmouseout = () => {
          el.lastElementChild.style.transform = 'inherit';
        };
      };
    });
  }
}
