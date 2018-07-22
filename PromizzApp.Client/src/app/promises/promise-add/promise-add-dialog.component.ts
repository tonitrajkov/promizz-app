import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';

import { PromiseService } from '../shared/promise.service';
import { PromiseModel } from '../../shared/models/promise.model';

@Component({
    templateUrl: './promise-add-dialog.component.html'
})
export class PromiseAddModalComponent {
    model: PromiseModel = new PromiseModel();

    constructor(
        private promiseService: PromiseService,
        private activeModal: NgbActiveModal
    ) { }

    closeModal() {
        this.activeModal.dismiss('close');
    }

    submitForm() {
        this.promiseService.createPromise(this.model)
        .pipe(first())
        .subscribe(result => {
            if(result)
            this.activeModal.close();
        });
    }
}