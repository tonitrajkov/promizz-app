import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserManager, User } from 'oidc-client';
import { environment } from '../../environments/environment';

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

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') != null;
  }

  constructor() {
    this.userManager.clearStaleState();

    this.userManager.events.addUserLoaded(user => {
      if (!environment.production) {
        console.log('User loaded.', user);
      }
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUser = user;
        this.userLoaded$.next(true);
      }
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
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (!environment.production) {
        console.log('Callback after signin handled.', user);
      }
    });
  }

  handleSilentCallback() {
    this.userManager.signinSilentCallback().then(function (user) {
      // this.currentUser = user
      if (user)
        localStorage.setItem('currentUser', JSON.stringify(user));
      if (!environment.production) {
        console.log('Callback after silent signin handled.', user);
      }
    });
  }

  triggerSignOut() {
    this.userManager.signoutRedirect().then(function (resp) {
      localStorage.removeItem('currentUser');
      if (!environment.production) {
        console.log('Redirection to sign out triggered.', resp);
      }
    });
  }

  getUserAccessType() {
    if (localStorage.getItem('currentUser')) {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      return user.token_type;
    }
    return '';
  }

  getUserAccessToken() {
    if (localStorage.getItem('currentUser')) {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      return user.access_token;
    }
    return '';
  }
}