import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    selectedTab: string = '';

    constructor(private router: Router) { }

    ngOnInit() {
        this.selectedTab = this.router.url;
    }

    onTabChange($event: NgbTabChangeEvent) {
        this.selectedTab = $event.nextId;
        this.router.navigate([$event.nextId])
    }
}