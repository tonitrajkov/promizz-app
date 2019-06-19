import { Component } from '@angular/core';

@Component({
    templateUrl: './pricing.component.html'
})
export class PricingComponent {

    public freePlanItems: string[] = [
        '80 promises',
        '1 person per promise',
        'Promise colors',
        'List view',
        'Grid view'
    ];
    public premiumPlanItems: string[] = [
        'Unlimited promises',
        '12 people per promise',
        'Promise colors',
        'List view',
        'Grid view',
        'Calendar view',
        'Comments & file uploads',
        'Reminders',
        'Premium themes'
    ];
    public businessPlanItems: string[] = [
        'Unlimited promises',
        '30 people per promise',
        'Promise colors',
        'List view',
        'Grid view',
        'Calendar view',
        'Comments & file uploads',
        'Reminders',
        'Premium themes',
        'People groups',
        'Custom Dashboards',
        'Reports',
        'Real-time Calendar Sync (Google and Outlook)'
    ];

    constructor() { }
}
