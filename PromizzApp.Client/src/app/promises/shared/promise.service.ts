import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ExceptionService } from '../../core/exception.service';

import { PromiseModel, PromiseAddModel } from '../../shared/models/promise.model';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../shared/models/user.model';
import { PromiseSearchModel } from '../../shared/models/search.model';

@Injectable()
export class PromiseService {
    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient,
        private exceptionService: ExceptionService) { }

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