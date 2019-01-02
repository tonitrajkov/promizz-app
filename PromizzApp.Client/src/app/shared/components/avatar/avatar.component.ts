import { Component, Input } from '@angular/core';

@Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html'
})
export class AvatarComponent {

    @Input() image: any;
    @Input() initials: string;
    @Input() className: string;

    constructor() { }
}
