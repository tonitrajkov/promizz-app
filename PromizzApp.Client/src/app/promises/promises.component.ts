import { Component, OnInit, EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PromiseModel, PromiseSearchModel } from '../shared/index';
import { PromiseService } from './shared/promise.service';
import { PromiseAddModalComponent } from './promise-add/promise-add-dialog.component';

@Component({
    templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit, OnDestroy {

    public sectionTitle: string = '';
    public searchModel: PromiseSearchModel = new PromiseSearchModel();
    public data = new EventEmitter<PromiseModel[]>();
    private sub: Subscription;

    constructor(
        private promiseService: PromiseService,
        private route: ActivatedRoute,
        private modalService: NgbModal
    ) { }

    public ngOnInit() {
        this.sub = this.route.queryParams.subscribe(
            params => {
                this.searchModel.Assing = params['assign'];

                if (this.searchModel.Assing === 'to') {
                    this.sectionTitle = 'Promises to me';
                }

                if (this.searchModel.Assing === 'my') {
                    this.sectionTitle = 'My Promises';
                }

                this.loadPromises();
            }
        );
    }

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    public openPromiseModal() {
        const modalRef = this.modalService.open(PromiseAddModalComponent);

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    private loadPromises() {
        // this.promiseService.loadPromises(this.searchModel)
        //     .subscribe(promises => {
        //         this.data.emit(promises);
        //     });
    }
}
