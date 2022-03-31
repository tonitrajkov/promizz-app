import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PubsubService } from '../../core/pupsub.service';
import { DemoService } from '../demo.service';
import { UserModel } from '../../shared';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    public friendsCount: number;

    constructor(private service: DemoService) { }

    public ngOnInit(): void {
        this.service.loadUsers()
            .subscribe(users => {
                if (users) {
                    this.friendsCount = users.length;
                }
                else {
                    this.friendsCount = 0;
                }
            });
    }
}
