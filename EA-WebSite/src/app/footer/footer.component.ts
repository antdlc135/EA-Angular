import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'ea-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  langDeskName!: any;
  langDeskFlag!: any;
  langMobName!: any;
  langMobFlag!: any;

  constructor() {}

  ngOnInit(): void {}
  changeLangDesk(data: any) {
    this.langDeskName = data[0];
    this.langDeskFlag = data[1];
  }
  changeLangMob(data: any) {
    this.langMobName = data[0];
    this.langMobFlag = data[1];
  }
}
