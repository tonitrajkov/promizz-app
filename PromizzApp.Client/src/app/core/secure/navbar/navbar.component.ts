import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'promizz-navbar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
    mouseEnter: boolean = false;

    constructor() { }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.mouseEnter = true;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.mouseEnter = false;
    }
}