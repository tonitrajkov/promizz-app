import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { UserModel, PromiseModel } from '../shared';

@Injectable()
export class PubsubService {
    private subject = new Subject<any>();
    private promiseSbj = new Subject<any>();

    public setUser(user: UserModel) {
        this.subject.next({ user });
    }

    public clearUser() {
        this.subject.next();
    }

    public getUser(): Observable<any> {
        return this.subject.asObservable();
    }

    public setPromise(promise: PromiseModel) {
        this.promiseSbj.next({ promise });
    }

    public clearPromise() {
        this.promiseSbj.next();
    }

    public getPromise(): Observable<any> {
        return this.promiseSbj.asObservable();
    }
}
