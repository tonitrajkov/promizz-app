import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[zzautosize]'
})
export class AutosizeDirective {

    constructor(public element: ElementRef) { }

    @Input() maxHeight: number; // based on pixel
    // @Input() minHeight: number; // based on pixel
    @HostListener('input', ['$event.target'])
    @HostListener('cut', ['$event.target'])
    @HostListener('paste', ['$event.target'])
    @HostListener('change', ['$event.target'])

    public ngOnInit(): void {
        this.adjustCustom();
    }

    public adjustCustom(): void {
        const element = this.element.nativeElement;
        // element.style.height = this.minHeight + 'px';
        element.style.height = (element.scrollHeight) + 'px';
        if (element.scrollHeight <= this.maxHeight) {

            element.style.overflowY = 'hidden'
            delete element.style.maxHeight
        } else {

            element.style.overflowY = 'scroll'
            element.style.maxHeight = this.maxHeight + 'px';
        }

    }

    // @HostListener('input', ['$event.target'])
    // public onInput(textArea: HTMLTextAreaElement): void {
    //     this.adjust();
    // }

    // public ngAfterContentChecked(): void {
    //     this.adjust();
    // }

    // public adjust(): void {
    //     this.element.nativeElement.style.overflow = 'hidden';
    //     this.element.nativeElement.style.height = 'auto';
    //     this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
    // }
}
