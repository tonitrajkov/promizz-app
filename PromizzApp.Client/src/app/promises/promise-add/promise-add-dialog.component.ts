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

    onDateSelect(date) {
        this.model.EndDate = null;
        if (date) {
            this.model.EndDate = new Date(date.year, date.month - 1, date.day);
        }
    }

    closeModal() {
        this.activeModal.dismiss('close');
    }

    submitForm() {
        this.promiseService.addPromise(this.model)
            .pipe(first())
            .subscribe(result => {
                if (result)
                    this.activeModal.close();
            });
    }
}