import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'public-header',
    templateUrl: './header.component.html'
})
export class PublicHeaderComponent {
    isScroling: boolean = false;

    constructor(private authService: AuthService) { }

    login() {
        this.authService.triggerSignIn();
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