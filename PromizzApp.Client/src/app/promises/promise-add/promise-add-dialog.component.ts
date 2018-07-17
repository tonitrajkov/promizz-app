import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './promise-add-dialog.component.html'
})
export class PromiseAddModalComponent {

    constructor(
        public activeModal: NgbActiveModal
      ) { }

      closeModal() {
        this.activeModal.close('Modal Closed');
      }
 }