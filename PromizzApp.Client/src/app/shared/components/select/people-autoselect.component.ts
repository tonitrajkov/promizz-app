import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'people-autopselect',
    templateUrl: './people-autoselect.component.html'
})
export class PeopleAutoselectComponent implements OnInit {

    @Input() data: EventEmitter<any[]>;
    @Output() onFilterChange = new EventEmitter();
    @Output() onSelectValue = new EventEmitter();

    private inputControl = new FormControl();
    private items: any[] = [];

    constructor() { }

    ngOnInit(): void {

        this.inputControl.valueChanges
            .pipe(debounceTime(400))
            .subscribe(value => {
                if (value && value.length >= 3) {
                    this.onFilterChange.emit(value);
                }
                else {
                    this.items = [];
                }
            });

        this.data.subscribe((items: any[]) => {
            this.items = items;
        });
    }

    onSelectItem(item: any) {
        this.onSelectValue.emit(item);
        this.clearResults();
    }

    private clearResults(): void {
        this.inputControl.setValue('');
        this.items = [];
    }

    clickedInside($event: Event) {
        $event.preventDefault();
        $event.stopPropagation();
    }

    @HostListener('document:click', ['$event'])
    clickedOutside($event: any): void {
        if ($event.target && $event.target.classList[0] !== "auto-form-placeholder") {
            this.clearResults();
            this.onSelectValue.emit(null);
        }
    }
}
