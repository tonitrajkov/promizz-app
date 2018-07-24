import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PromiseService } from './shared/promise.service';
import { PromiseModel } from '../shared/models/promise.model';
import { PromiseAddModalComponent } from './promise-add/promise-add-dialog.component';

@Component({
    templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit, OnDestroy {

    private promises: PromiseModel[];
    private assign: string;
    private sub: Subscription;
    private listView: boolean = false;
    public sectionTitle: string = '';

    constructor(
        private promiseService: PromiseService,
        private route: ActivatedRoute,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(
            params => {
                this.assign = params['assign'];
                if (this.assign == 'to') {
                    this.sectionTitle = 'Promises made to me';
                }
                if (this.assign == 'by') {
                    this.sectionTitle = 'Promises by me';
                }

                this.promiseService.loadPromises()
                    .pipe(first())
                    .subscribe(
                        promises => {
                            this.promises = promises;
                        },
                        error => {
                            console.log(error);
                        });
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    openPromiseModal() {
        const modalRef = this.modalService.open(PromiseAddModalComponent);

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }
}