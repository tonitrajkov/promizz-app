import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ExceptionService } from '../core/exception.service';

import { UserModel } from '../shared/models/user.model';
import { environment } from '../../environments/environment';


@Injectable()
export class ProfileService {
    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient,
        private exceptionService: ExceptionService) { }

    getPromise(username: string): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.apiUrl}/profile/${username}`);
    }

    updateUser(model: UserModel): Observable<any> {
        return this.http.put(`${this.apiUrl}/profile/`, model,
            { headers: { 'Content-Type': 'application/json' } });
    }

    loadFriends(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`${this.apiUrl}/profile/loadfriends`);
    }
}