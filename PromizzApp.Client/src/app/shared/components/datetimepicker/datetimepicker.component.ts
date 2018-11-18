import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'promizz-datetimepicker',
    templateUrl: './datetimepicker.component.html'
})
export class PromizzDateTimePickerComponent implements OnInit {
    model: NgbDateStruct;
    today = this.calendar.getToday();
    time = { hour: 13, minute: 30 };

    constructor(private calendar: NgbCalendar) { }

    ngOnInit(): void { }
}
