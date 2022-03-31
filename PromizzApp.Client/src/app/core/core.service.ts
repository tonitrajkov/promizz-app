import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserModel } from '../shared';

@Injectable()
export class CoreService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getCurrentUser(): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.apiUrl}/demo/currentuser`);
    }
}
