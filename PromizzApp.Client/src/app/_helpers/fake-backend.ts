import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


import { USERS } from './mock.objects';
import { User } from '../shared/models/user.model';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let users: User[] = USERS;
        //return;
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {

                if (!request.body.model.Email)
                    return throwError('Email is required');

                if (!request.body.model.Password)
                    return throwError('Password is required');

                let filterByEmail = users.filter(user => {
                    return user.Email === request.body.model.Email;
                });

                if (filterByEmail.length > 0) {
                    let user: User = filterByEmail[0];
                    if (user.Password === request.body.model.Password) {
                        user.Token = 'fake-token-1';
                        return of(new HttpResponse({ status: 200, body: user }));
                    }
                    return throwError('Password is incorect');
                } else {
                    let filterByUserName = users.filter(user => {
                        return user.UserName === request.body.model.Email;
                    });

                    if (filterByUserName.length > 0) {
                        let user: User = filterByUserName[0];
                        if (user.Password === request.body.model.Password) {
                            user.Token = 'fake-token-1';
                            return of(new HttpResponse({ status: 200, body: user }));
                        }
                        return throwError('Password is incorect');
                    }

                    if (request.body.model.Email.indexOf('@') > -1)
                        return throwError('There is not an account for this email');

                    let msg: any = {
                        status: 407,
                        message: 'There is not an account for this username'
                    };
                    return throwError(msg);
                }
            }

            // signup
            if (request.url.endsWith('api/signup') && request.method === 'POST') {

                if (!request.body.model.FullName)
                    return throwError('Name is required');

                if (!request.body.model.Email)
                    return throwError('Email is required');

                if (!request.body.model.Password)
                    return throwError('Password is required');

                let filterByEmail = users.filter(user => {
                    return user.Email === request.body.model.Email;
                });

                if (filterByEmail.length > 0)
                    return throwError('A user with that email address already exists.');

                return of(new HttpResponse({ status: 200, body: true }));
            }

            // forgot  password
            if (request.url.endsWith('api/forgotPassword') && request.method === 'POST') {

                if (!request.body.email)
                    return throwError('Email is required');

                let filterByEmail = users.filter(user => {
                    return user.Email === request.body.email;
                });

                if (filterByEmail.length == 0)
                    return throwError('No such user.');

                return of(new HttpResponse({ status: 200, body: true }));
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))

            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};