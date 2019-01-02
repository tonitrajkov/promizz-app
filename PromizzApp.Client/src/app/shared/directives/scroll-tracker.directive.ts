import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
    @Output() onScrollEnd = new EventEmitter();

    constructor() { }

    @HostListener('scroll', ['$event'])
    onScroll(event) {
        let tracker = event.target;
        let limit = tracker.scrollHeight - tracker.clientHeight;
        let targetScroll = +event.target.scrollTop.toFixed();

        if (targetScroll === limit) {
            this.onScrollEnd.emit();
        }
    }
}