import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PubsubService } from '../../core/pupsub.service';
import { DemoService } from '../demo.service';
import { UserModel } from '../../shared';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
    public topFriends: UserModel[];
    public promisesCount: string = '198';
    public requestsCount: string = '47';
    public friendsCount: string = '-';
    public achievementsCount: string = '324 K';
    public currentUser: UserModel;

    private subscription: Subscription;

    constructor(
        private service: DemoService,
        private pubsubService: PubsubService
    ) {
        this.subscription = this.pubsubService.getUser().subscribe(user => {
            if (user) {
                this.currentUser = user.user;
            }
        });
    }

    public ngOnInit(): void {
        this.loadTopFriends();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public loadTopFriends(): void {
        this.service.loadUsers().subscribe((users: UserModel[]) => {
            this.friendsCount = users.length.toString();
            this.topFriends = users.slice(0, 6);
        });
    }
}
