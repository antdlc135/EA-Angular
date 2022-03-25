import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'ea-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.scss'],
})
export class PreFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.buttonSubmit();
  }
  buttonSubmit() {
    let mainButton: any = document.querySelectorAll('.mainButton');

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
