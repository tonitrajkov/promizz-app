import { Component, HostListener } from '@angular/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  headerDeatached: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 0) {
      this.headerDeatached = true;
    }
    if (number === 0) {
      this.headerDeatached = false;
    }
  }
}
