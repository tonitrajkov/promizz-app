import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './invite-dialog.component.html'
})
export class InviteDialogComponent implements OnInit {

    constructor(private activeModal: NgbActiveModal) { }

    ngOnInit(): void { }

    public submit(): void {
        this.activeModal.close(true);
    }

    public cancel(): void {
        this.activeModal.close(true);
    }
}
