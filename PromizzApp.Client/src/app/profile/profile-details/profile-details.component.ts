import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { ProfileService } from '../profile.service';
import { UserModel } from '../../shared/models/user.model';

@Component({
    selector: 'promizz-profile-details',
    templateUrl: './profile-details.component.html'
})
export class ProfileDetailsComponent implements OnInit {
    private canEdit: boolean = true;
    private isEditing: boolean = false;
    private sub: Subscription;
    private user: UserModel;

    constructor(
        private profileService: ProfileService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        var user = localStorage.getItem('currentUser');

        this.profileService.getPromise("ironman")
        .pipe(first())
        .subscribe(user => {
            this.user = user;
        });

        // this.sub = this.route.queryParams.subscribe(
        //     params => {
        //         this.assign = params['assign'];
        //         if (this.assign == 'to') {
        //             this.sectionTitle = 'Promises made to me';
        //         }
        //         if (this.assign == 'by') {
        //             this.sectionTitle = 'Promises by me';
        //         }

        //         this.promiseService.loadPromises()
        //             .pipe(first())
        //             .subscribe(
        //                 promises => {
        //                     this.promises = promises;
        //                 },
        //                 error => {
        //                     console.log(error);
        //                 });
        //     }
        // );
    }

    ngOnDestroy(): void {
     //   this.sub.unsubscribe();
    }


    edit() {
        this.isEditing = true;
    }

    save() {
        this.profileService.updateUser(this.user)
        .pipe(first())
        .subscribe(result => {
            this.isEditing = false;
        });
    }

    cancel() {
        this.isEditing = false;
    }
}