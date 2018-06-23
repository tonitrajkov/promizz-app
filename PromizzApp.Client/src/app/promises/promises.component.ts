import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { PromiseService } from './shared/promise.service';
import { PromiseModel } from '../shared/models/promise.model';

@Component({
    templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {

    promises: PromiseModel[];

    constructor(private promiseService: PromiseService) { }

    ngOnInit() {
        this.promiseService.loadPromises()
            .pipe(first())
            .subscribe(
                promises => {
                    this.promises = promises;
                },
                error => {
                    console.log('Error');
                    console.log(error);
                });

    }
}