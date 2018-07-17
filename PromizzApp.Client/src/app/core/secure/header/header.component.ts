import { Component, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PromiseAddModalComponent } from '../../../promises/promise-add/promise-add-dialog.component';

@Component({
    selector: 'secure-header',
    templateUrl: './header.component.html'
})
export class SecureHeaderComponent {
    isScroling: boolean = false;

    constructor(
        private modalService: NgbModal
      ) { }

      openPromiseModal() {
        const modalRef = this.modalService.open(PromiseAddModalComponent);
        
        modalRef.result.then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
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