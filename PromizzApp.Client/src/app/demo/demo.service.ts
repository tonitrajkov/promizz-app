import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserModel, PromiseModel } from '../shared';

@Injectable()
export class DemoService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public loadUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`${this.apiUrl}/demo/user`);
    }

    public getUserById(userId: number): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.apiUrl}/demo/user/` + userId);
    }

    public getCurrentUser(): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.apiUrl}/demo/currentuser`);
    }

    public loadPromises(): Observable<PromiseModel[]> {
        return this.http.get<PromiseModel[]>(`${this.apiUrl}/demo/promise`);
    }

    public getPromiseById(promiseId: number): Observable<PromiseModel> {
        return this.http.get<PromiseModel>(`${this.apiUrl}/demo/promise/` + promiseId);
    }
}