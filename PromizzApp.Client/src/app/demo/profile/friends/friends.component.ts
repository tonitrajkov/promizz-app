import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import { UserModel } from '../../../shared';

@Component({
    templateUrl: './friends.component.html'
})
export class FriendsComponent implements OnInit {
    public friends: UserModel[] = [];

    constructor(private demoService: DemoService) { }

    public ngOnInit(): void { 
        this.loadFriends();
    }

    public loadFriends() {
        this.demoService.loadUsers()
            .subscribe(users => {
                this.friends = users;
            });
    }
}
