import { Component } from '@angular/core';

@Component({
    templateUrl: './pricing.component.html'
})
export class PricingComponent {

    public freePlanItems: string[] = [
        '100 promises', 
        '1 person per promise'
    ];
    public premiumPlanItems: string[] = [
        'Unlimited promises',
        '15 people per promise',
        'Comments & file uploads',
        'Reminders',
        'Premium themes'
    ];
    public businessPlanItems: string[] = [
        'Unlimited promises',
        '30 people per promise',
        'Comments & file uploads',
        'Reminders',
        'Premium themes',
        'People groups'
    ];

    constructor() { }
}
