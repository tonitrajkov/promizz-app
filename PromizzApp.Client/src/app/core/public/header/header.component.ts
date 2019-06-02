import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'public-header',
    templateUrl: './header.component.html'
})
export class PublicHeaderComponent {
    isScroling: boolean = false;

    constructor() { }

    login() {
        return false;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 0) {
            this.isScroling = true;
        }
        if (number === 0) {
            this.isScroling = false;
        }
    }
}