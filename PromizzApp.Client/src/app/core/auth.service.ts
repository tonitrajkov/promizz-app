import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserManager, User } from 'oidc-client';
import { environment } from '../../environments/environment';

import { ExceptionService } from './exception.service';

//import { User } from '../shared/models/user.model';
// import { Credentials } from '../account/shared/credentials.model';
// import { SignUp } from '../account/shared/signup.model';
import { CURRENT_USER, USERS } from '../_helpers/mock.objects';

@Injectable()
export class AuthService {
  private userManager: UserManager = new UserManager(environment.openIdConnectSettings);
  private currentUser: User;

  userLoaded$ = new ReplaySubject<boolean>(1);

  get userAvailable(): boolean {
    return this.currentUser != null;
  }

  get user(): User {
    return this.currentUser;
  }

  constructor(private http: HttpClient,
    private exceptionService: ExceptionService) {
    this.userManager.clearStaleState();

    this.userManager.events.addUserLoaded(user => {
      if (!environment.production) {
        console.log('User loaded.', user);
      }
      this.currentUser = user;
      this.userLoaded$.next(true);
    });

    this.userManager.events.addUserUnloaded((e) => {
      if (!environment.production) {
        console.log('User unloaded');
      }
      this.currentUser = null;
      this.userLoaded$.next(false);
    });
  }

  triggerSignIn() {
    this.userManager.signinRedirect().then(function () {
      if (!environment.production) {
        console.log('Redirection to signin triggered.');
      }
    });
  }

  handleCallback() {
    this.userManager.signinRedirectCallback().then(function (user) {
      if (!environment.production) {
        console.log('Callback after signin handled.', user);
      }
    });
  }

  handleSilentCallback() {
    this.userManager.signinSilentCallback().then(function (user) {
      this.currentUser = user
      if (!environment.production) {
        console.log('Callback after silent signin handled.', user);
      }
    });
  }

  triggerSignOut() {
    this.userManager.signoutRedirect().then(function (resp) {
      if (!environment.production) {
        console.log('Redirection to sign out triggered.', resp);
      }
    });
  };

  login(model: any) {
    // return this.http.post<User>('/api/authenticate', { model: model })
    //   .pipe(map(user => {
    //     if (user && user.Token) {
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       this.currentUser = user;
    //       return true;
    //     }
    //     return false;
    //   }), catchError(this.exceptionService.catchBadResponse));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  signUp(model: any) {
    // return this.http.post<boolean>('/api/signup', { model: model })
    //   .pipe(map(status => {
    //     return status;
    //   }), catchError(this.exceptionService.catchBadResponse));
  }

  forgotPassword(email: string) {
    // return this.http.post<boolean>('/api/forgotPassword', { email: email })
    //   .pipe(map(status => {
    //     return status;
    //   }),
    //     catchError(this.exceptionService.catchBadResponse));
  }
}