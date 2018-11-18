import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'promizz-dropdown',
    templateUrl: './dropdown.component.html'
})
export class PromizzDropdownComponent {

    @Input()
    values: any[];

    @Output()
    select: EventEmitter;

    constructor() {
        this.select = new EventEmitter();
    }

    selectItem(value) {
        this.select.emit(value);
    }
}
