import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PromiseModel, PromiseAddModel, UserModel, PromiseSearchModel } from '../../shared/index';
import { environment } from '../../../environments/environment';

@Injectable()
export class PromiseService {
    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    loadPromises(model: PromiseSearchModel): Observable<PromiseModel[]> {
        return this.http.post<PromiseModel[]>(`${this.apiUrl}/promise/loadpromises`, model,
            { headers: { 'Content-Type': 'application/json' } });
    }

    getPromise(promiseId: string): Observable<PromiseModel> {
        return this.http.get<PromiseModel>(`${this.apiUrl}/promise/${promiseId}`);
    }

    addPromise(model: PromiseAddModel): Observable<any> {
        return this.http.post(`${this.apiUrl}/promise/`, model,
            { headers: { 'Content-Type': 'application/json' } });
    }

    updatePromise(model: PromiseModel): Observable<any> {
        return this.http.put(`${this.apiUrl}/promise/`, model,
            { headers: { 'Content-Type': 'application/json' } });
    }

    filterUsers(filterValue: string): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`${this.apiUrl}/profile/filterusers/${filterValue}`);
    }
}
