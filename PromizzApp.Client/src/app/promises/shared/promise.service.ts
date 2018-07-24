import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ExceptionService } from '../../core/exception.service';

import { PromiseModel } from '../../shared/models/promise.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class PromiseService {
    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient,
        private exceptionService: ExceptionService) { }

    loadPromises(): Observable<PromiseModel[]>  {
        return this.http.get<PromiseModel[]>(`${this.apiUrl}/promise`);
    }

    getPromise(promiseId: string): Observable<PromiseModel> {
        return this.http.get<PromiseModel>(`${this.apiUrl}/promise/${promiseId}`);
    }

    createPromise(model: PromiseModel): Observable<any> {
        return this.http.post(`${this.apiUrl}/promise/`, model,
            { headers: { 'Content-Type': 'application/json' } });
    }
}