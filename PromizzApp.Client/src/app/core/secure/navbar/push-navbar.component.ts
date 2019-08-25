import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'promizz-push-navbar',
    templateUrl: './push-navbar.component.html',
    host: { 'class': 'push-navbar-main' }
})
export class PushNavBarComponent implements OnInit {
    public isExpanded: boolean = false;
    
    public ngOnInit() {
        this.initMenu();
    }

    public toggleMenu(): void {
        this.isExpanded = !this.isExpanded;
        this.setLocalStorage();
    }

    private initMenu(): void {
        let storageItem = localStorage.getItem('menu-is-expanded');
        storageItem ? this.isExpanded = JSON.parse(storageItem) : this.setLocalStorage();
    }

    private setLocalStorage(): void {
        localStorage.setItem('menu-is-expanded', String(this.isExpanded));
    }
}
