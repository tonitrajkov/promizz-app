import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ProfileService } from '../profile.service';
import { UserModel } from '../../shared/models/user.model';

@Component({
    templateUrl: 'friends.component.html'
})
export class FriendsComponent implements OnInit {
    friends: UserModel[];

    constructor(private profileService: ProfileService) { }

    ngOnInit() {
        this.profileService.loadFriends()
        .pipe(first())
        .subscribe(friends => {
            this.friends = friends;
        })
     }
}