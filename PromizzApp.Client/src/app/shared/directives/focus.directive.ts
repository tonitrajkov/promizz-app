import { Directive, HostListener, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[zzfocus]',
    host: {
        '(focus)': 'setInputFocus(true)',
        '(blur)': 'setInputFocus(false)',
    }
})
export class FocusDirective {
    @Output() onScrollEnd = new EventEmitter();

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ) { }

    public setInputFocus(isSet: boolean): void {
        this.renderer.setElementClass(this.elementRef.nativeElement.parentElement, 'has-focus', isSet);
    }
}
