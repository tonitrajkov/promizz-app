import {
    Directive,
    ElementRef,
    HostBinding,
    EventEmitter,
    Output,
    OnDestroy,
    AfterViewInit,
    Inject,
    Input,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[zzInViewport]',
    exportAs: 'zzInViewport'
})
export class InViewportDirective implements AfterViewInit, OnDestroy, OnInit {
    @Input()
    public inViewportOptions: IntersectionObserverInit;
    @Output()
    public inViewportChange = new EventEmitter<boolean>();

    private inViewport: boolean;
    private hasIntersectionObserver: boolean;
    private observer: IntersectionObserver;

    constructor(private el: ElementRef) {
       this.hasIntersectionObserver = this.intersectionObserverFeatureDetection();
    }

    @HostBinding('class.zz-viewport--in')
    get isInViewport(): boolean {
        return this.inViewport;
    }

    @HostBinding('class.zz-viewport--out')
    get isNotInViewport(): boolean {
        return !this.inViewport;
    }

    public ngOnInit(): void {
        if (!this.hasIntersectionObserver) {
            this.inViewport = true;
           // this.inViewportChange.emit(this.inViewport);
        }
    }

    public ngAfterViewInit(): void {
        if (this.hasIntersectionObserver) {
            const IntersectionObserver = window['IntersectionObserver'];
            this.observer = new IntersectionObserver(
                this.intersectionObserverCallback.bind(this),
                this.inViewportOptions
            );

            this.observer.observe(this.el.nativeElement);
        }
    }

    public ngOnDestroy(): void {
        if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
        }
    }

    public intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
        entries.forEach(entry => {
            if (this.inViewport === entry.isIntersecting) return;
            this.inViewport = entry.isIntersecting;
            this.inViewportChange.emit(this.inViewport);
        });
    }

    private intersectionObserverFeatureDetection() {
        // Exits early if all IntersectionObserver and IntersectionObserverEntry
        // features are natively supported.
        if (
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window
        ) {
            // Minimal polyfill for Edge 15's lack of `isIntersecting`
            // See: https://github.com/w3c/IntersectionObserver/issues/211
            if (
                !(
                    'isIntersecting' in
                    window['IntersectionObserverEntry']['prototype']
                )
            ) {
                Object.defineProperty(
                    window['IntersectionObserverEntry']['prototype'],
                    'isIntersecting',
                    {
                        get: function () {
                            return this.intersectionRatio > 0;
                        }
                    }
                );
            }
            return true;
        }
        return false;
    }
}
