import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { UserModel } from '../shared';

@Injectable()
export class PubsubService {
    private subject = new Subject<any>();

    setUser(user: UserModel) {
        this.subject.next({ user });
    }

    clearUser() {
        this.subject.next();
    }

    getUser(): Observable<any> {
        return this.subject.asObservable();
    }
}
