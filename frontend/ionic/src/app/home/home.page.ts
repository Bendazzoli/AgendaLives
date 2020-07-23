import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public windowCreated: string;

  constructor() {
    this.windowCreated = 'home';
  }

  segmentChanged(ev: any) {

    if (ev.detail.value === 'next') {
      this.windowCreated = ev.detail.value;
    } else {
      this.windowCreated = ev.detail.value;
    }
  }
}
