import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { PubsubService } from '../../core/pupsub.service';
import { PromiseModel, UserModel } from '../../shared';
import { DemoService } from '../demo.service';

@Component({
    selector: 'promizz-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit, OnDestroy {
    public showPane: boolean = false;
    public promise: PromiseModel = new PromiseModel();

    public users: UserModel[] = [];
    public fiteredUsers = new EventEmitter<any[]>();
    public selectedUser: UserModel;
    public showAutocomplete: boolean = false;

    private subscription: Subscription;

    constructor(
        private pubSubService: PubsubService,
        private demoService: DemoService
    ) {
        this.subscription = this.pubSubService.getPromise().subscribe(data => {
            if (data) {
                this.promise = this.copyObject<PromiseModel>(data.promise);
                // this.promise = data.promise;
                this.showPane = true;
            }
        });
    }

    public ngOnInit(): void {
        this.loadUsers();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public closePane() {
        this.showPane = false;
        this.pubSubService.clearPromise();
    }

    // Autocomplete actions 
    public handleFilterChange(value: any) {
        let filteredUsers = this.users.filter(user =>
            user.Fullname.toLowerCase().indexOf(value.toLowerCase()) !== -1);

        this.fiteredUsers.emit(filteredUsers);
    }

    public handleSelectValue(user: any) {
        if (user) {
            this.promise.Promisee = user;
        }
        this.showAutocomplete = false;
    }

    public clearUser() {
        if (this.promise && this.promise.Promisee)
            this.promise.Promisee = null;
    }

    public addUser() {
        this.showAutocomplete = true;
    }

    public clearEndDate() {
        this.promise.EndDate = null;
    }

    public onDateSelect(date) {
        this.promise.EndDate = null;
        if (date) {
            this.promise.EndDate = new Date(date.year, date.month - 1, date.day);
        }
    }

    private loadUsers(): void {
        this.demoService.loadUsers()
            .subscribe((users: UserModel[]) => {
                this.users = users;
            });
    }

    private copyObject<T>(object: T): T {
        return <T>JSON.parse(JSON.stringify(object));
    }
}
