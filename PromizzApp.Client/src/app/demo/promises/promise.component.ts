import { Component, OnInit } from '@angular/core';

import { LookupItem, PromiseModel } from '../../shared';
import { PromiseViewFilter } from './types';
import { DemoService } from '../demo.service';
import { PubsubService } from '../../core/pupsub.service';

@Component({
    templateUrl: './promise.component.html',
    host: { 'class': 'zz-pane-holder' }
})
export class PromiseComponent implements OnInit {
    public viewFilter: LookupItem<number>[] = PromiseViewFilter;
    public promises: PromiseModel[];

    constructor(
        private demoService: DemoService,
        private pubSubService: PubsubService
    ) { }

    public ngOnInit(): void {
        this.loadPromises();
    }

    public openPromiseDetails(promise: PromiseModel) {
        this.pubSubService.setPromise(promise);
    }

    public setListItemStyle(promise: PromiseModel): string {
        let styleValue = 'span ';

        if (promise.Description) {
            if (promise.Description.length > 35) {
                return styleValue + '6';
            }

            return styleValue + '5'
        }

        return styleValue + '4';
    }

    public getColorRbga(color: string, opacity: number): string {
        if(color) {
            return this.hex2rgb(color, opacity);
        }
    }

    private loadPromises(): void {
        this.demoService.loadPromises()
            .subscribe(promises => {
                this.promises = promises;
            });
    }

    private hex2rgb(hex: any, opacity: number): string {
        let  h = hex.replace('#', '');
        h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

        for (var i = 0; i < h.length; i++)
        h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);

        if (typeof opacity != 'undefined') h.push(opacity);

        return 'rgba(' + h.join(',') + ')';
    }
}
