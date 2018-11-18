import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PromiseService } from './shared/promise.service';
import { PromiseModel } from '../shared/models/promise.model';
import { PromiseAddModalComponent } from './promise-add/promise-add-dialog.component';
import { PromiseSearchModel } from '../shared/models/search.model';

@Component({
    templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit, OnDestroy {

    private promises: PromiseModel[];
    private assign: string;
    private sub: Subscription;
    private listView: boolean = false;
    private isLoading: boolean;
    public sectionTitle: string = '';
    public searchModel: PromiseSearchModel = new PromiseSearchModel();

    constructor(
        private promiseService: PromiseService,
        private route: ActivatedRoute,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(
            params => {
                this.isLoading = true;
                this.searchModel.Assing =  params['assign'];

                if (this.searchModel.Assing === 'to') {
                    this.sectionTitle = 'Promises made to me';
                }
                if (this.searchModel.Assing === 'by') {
                    this.sectionTitle = 'Promises by me';
                }

                this.promiseService.loadPromises(this.searchModel)
                    .pipe(first())
                    .subscribe(
                        promises => {
                            this.promises = promises;
                            setTimeout(() => {
                                this.isLoading = false;
                            }, 2000);
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