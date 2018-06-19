import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'secure-header',
    templateUrl: './header.component.html'
})
export class SecureHeaderComponent {
    isScroling: boolean = false;

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