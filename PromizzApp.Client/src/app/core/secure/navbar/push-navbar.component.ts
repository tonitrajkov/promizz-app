import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InviteDialogComponent } from '../../../shared/dialogs/invite-dialog.component';

@Component({
    selector: 'promizz-push-navbar',
    templateUrl: './push-navbar.component.html',
    host: { 'class': 'push-navbar-main' }
})
export class PushNavBarComponent implements OnInit {
    public isExpanded: boolean = false;

    constructor(private modalService: NgbModal) { }

    public ngOnInit() {
        this.initMenu();
    }

    public toggleMenu(): void {
        this.isExpanded = !this.isExpanded;
        this.setLocalStorage();
    }

    public openInviteDialog() {
        const modalRef = this.modalService.open(InviteDialogComponent);
    
        modalRef.result.then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
      }
    
    private initMenu(): void {
        let storageItem = localStorage.getItem('menu-is-expanded');
        storageItem ? this.isExpanded = JSON.parse(storageItem) : this.setLocalStorage();
    }

    private setLocalStorage(): void {
        localStorage.setItem('menu-is-expanded', String(this.isExpanded));
    }
}
