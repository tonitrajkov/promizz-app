import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


import { USERS, CURRENT_USER, PROMISES } from './mock.objects';
import { UserModel, PromiseModel } from '../shared';
import { promise } from 'protractor';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    public users: UserModel[] = USERS;
    public currentUser: UserModel = CURRENT_USER;
    public promises: PromiseModel[] = PROMISES;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // return;
        return of(null).pipe(mergeMap(() => {

            // demo user api
            if (request.url.indexOf('api/demo/user') !== -1) {
                let urlParts = request.url.split('/');
                let userId = parseInt(urlParts[urlParts.length - 1]);

                switch (request.method) {
                    case 'GET':
                        if (userId) {
                            // get user by Id
                            let user = this.getUserById(userId, true);
                            return of(new HttpResponse({ status: 200, body: user }));
                        }
                        else {
                            // get all users
                            return of(new HttpResponse({ status: 200, body: this.users }));
                        }
                    case 'POST': // add new user
                        let newUser = <UserModel>request.body;
                        newUser.Id = this.generateId(this.users.map(user => user.Id));
                        this.users.push(newUser);

                        return of(new HttpResponse({ status: 200 }));
                    case 'PUT': // update user
                        let model = <UserModel>request.body;
                        let user = this.getUserById(model.Id, false);
                        if (user) {
                            user.Firstname = model.Firstname;
                            user.Lastname = model.Lastname;
                            user.Bio = model.Bio;
                            user.Email = model.Email;
                        }

                        return of(new HttpResponse({ status: 200 }));
                    case 'DELETE':
                        if (userId) {
                            let user = this.getUserById(userId, false);
                            if (user) {
                                let index = this.users.indexOf(user, 0);
                                if (index !== -1) {
                                    this.users.splice(index, 1);
                                }
                            }

                            return of(new HttpResponse({ status: 200 }));
                        }
                        break;
                }
            }

            if (request.url.indexOf('api/demo/currentuser') !== -1) {

                switch (request.method) {
                    case 'GET':
                        return of(new HttpResponse({ status: 200, body: this.currentUser }));
                    case 'PUT': // update user
                        let model = <UserModel>request.body;

                        this.currentUser.Firstname = model.Firstname;
                        this.currentUser.Lastname = model.Lastname;
                        this.currentUser.UserName = model.UserName;
                        this.currentUser.Bio = model.Bio;
                        this.currentUser.Avatar = model.Avatar;

                        return of(new HttpResponse({ status: 200 }));
                }

            }

            // demo promise api
            if (request.url.indexOf('api/demo/promise') !== -1) {
                let urlParts = request.url.split('/');
                let promiseId = parseInt(urlParts[urlParts.length - 1]);

                switch (request.method) {
                    case 'GET':
                        if (promiseId) {
                            // get user by Id
                            let promise = this.getPromiseById(promiseId, true);
                            return of(new HttpResponse({ status: 200, body: promise }));
                        }
                        else {
                            // get all users
                            return of(new HttpResponse({ status: 200, body: this.promises }));
                        }
                    case 'POST': // add new user
                        let newPromise = <PromiseModel>request.body;
                        newPromise.Id = this.generateId(this.promises.map(promise => promise.Id));
                        this.promises.push(newPromise);

                        return of(new HttpResponse({ status: 200 }));
                    case 'PUT': // update user
                        let model = <PromiseModel>request.body;
                        let promise = this.getPromiseById(model.Id, false);
                        if (promise) {
                            promise.Title = model.Title;
                            promise.Description = model.Description;
                        }

                        return of(new HttpResponse({ status: 200 }));
                    case 'DELETE':
                        if (promiseId) {
                            let promise = this.getPromiseById(promiseId, false);
                            if (promise) {
                                let index = this.promises.indexOf(promise, 0);
                                if (index !== -1) {
                                    this.promises.splice(index, 1);
                                }
                            }

                            return of(new HttpResponse({ status: 200 }));
                        }
                        break;
                }
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))

            // call materialize and dematerialize to ensure delay even if an error is thrown
            // (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }

    // get by id functions
    public getUserById(userId: number, makeCopy: boolean): UserModel {
        let user = this.users.filter(user => { return user.Id === userId; })[0];

        if (!user) {
            return {} as UserModel;
        }

        return makeCopy ? this.copyObject<UserModel>(user) : user;
    }

    public getPromiseById(promiseId: number, makeCopy: boolean): PromiseModel {
        let promise = this.promises.filter(promise => { return promise.Id === promiseId; })[0];

        if (!promise) {
            return {} as PromiseModel;
        }

        return makeCopy ? this.copyObject<PromiseModel>(promise) : promise;
    }

    // private functions
    private generateId(ids: number[]): number {
        let maxId = 0;
        ids.forEach(id => {
            if (id > maxId) {
                maxId = id;
            }
        });

        return maxId + 1;
    }

    private copyObject<T>(object: T): T {
        return <T>JSON.parse(JSON.stringify(object));
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
