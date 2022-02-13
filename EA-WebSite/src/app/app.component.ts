import { Component } from '@angular/core';

@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EA-WebSite';
  asideOp!: boolean;

  aside(x: boolean) {
    this.asideOp = x;
  }
}
