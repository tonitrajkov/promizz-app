import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ExceptionService } from './exception.service';

import { User } from '../shared/models/user.model';
// import { Credentials } from '../account/shared/credentials.model';
// import { SignUp } from '../account/shared/signup.model';
import { CURRENT_USER, USERS } from '../_helpers/mock.objects';

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private http: HttpClient,
    private exceptionService: ExceptionService) { }

  login(model: any) {
    return this.http.post<User>('/api/authenticate', { model: model })
      .pipe(map(user => {
        if (user && user.Token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser = user;
          return true;
        }
        return false;
      }), catchError(this.exceptionService.catchBadResponse));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  signUp(model: any) {
    return this.http.post<boolean>('/api/signup', { model: model })
      .pipe(map(status => {
        return status;
      }), catchError(this.exceptionService.catchBadResponse));
  }

  forgotPassword(email: string) {
    return this.http.post<boolean>('/api/forgotPassword', { email: email })
      .pipe(map(status => {
        return status;
      }),
        catchError(this.exceptionService.catchBadResponse));
  }
}