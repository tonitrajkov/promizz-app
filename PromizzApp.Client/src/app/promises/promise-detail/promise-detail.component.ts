import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { PromiseService } from '../shared/promise.service';
import { PromiseModel } from '../../shared/models/promise.model';

@Component({
    templateUrl: './promise-detail.component.html'
})
export class PromiseDetailComponent implements OnInit, OnDestroy {

    private promise: PromiseModel = new PromiseModel();
    private promiseId: string;
    private sub: Subscription;

    constructor(
        private promiseService: PromiseService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                this.promiseId = params['promiseId'];

                this.promiseService.getPromise(this.promiseId)
                    .pipe(first())
                    .subscribe(
                        promise => {
                            this.promise = promise;
                        },
                        error => {
                            console.log('Error');
                            console.log(error);
                        });
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    updatePromise() {
        this.promiseService.updatePromise(this.promise)
            .pipe(first())
            .subscribe(result => {
                if (result)
                    alert("Promise Updated")
            });
    }
}