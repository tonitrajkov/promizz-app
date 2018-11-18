import { Component, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';

import { Utils } from '../../shared/globals';
import { PromiseService } from '../shared/promise.service';
import { PromiseAddModel } from '../../shared/models/promise.model';
import { UserModel } from '../../shared/models/user.model';

@Component({
    templateUrl: './promise-add-dialog.component.html'
})
export class PromiseAddModalComponent {
    public model: PromiseAddModel = new PromiseAddModel();
    public errorModel: any;
    public selectedUser: UserModel;
    public showAutocomplete: boolean = false;
    public fiteredUsers = new EventEmitter<any[]>();

    constructor(
        private promiseService: PromiseService,
        private activeModal: NgbActiveModal
    ) { }

    handleFilterChange(value: any) {
        this.promiseService.filterUsers(value)
            .subscribe(result => {
                this.fiteredUsers.emit(result);
            });
    }

    handleSelectValue(user: any) {
        if (user) {
            this.selectedUser = user;
        }
        this.showAutocomplete = false;
    }

    handleSelectColor(colorName: string){
        if(colorName){
            this.model.Color = colorName;
        }
    }

    getRandomNumber(): number {
        return Utils.getRandomNumberFromInterval(1, 8);
    }

    onDateSelect(date) {
        this.model.EndDate = null;
        if (date) {
            this.model.EndDate = new Date(date.year, date.month - 1, date.day);
        }
    }

    onDateClear() {
        this.model.EndDate = null;
    }

    onUserClear() {
        this.selectedUser = null;
    }

    closeModal() {
        this.activeModal.dismiss('close');
    }

    submitForm() {

        if (this.selectedUser != null) {
            this.model.Promisees = new Array<number>();
            this.model.Promisees.push(this.selectedUser.Id);
        }

        this.promiseService.addPromise(this.model)
            .pipe(first())
            .subscribe(result => {
                this.activeModal.close();
            }, errorModel => {
                this.errorModel = errorModel;
            });
    }
}