import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


import { USERS, CURRENT_USER } from './mock.objects';
import { UserModel } from '../shared';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    public users: UserModel[] = USERS;
    public currentUser: UserModel = CURRENT_USER;

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
                return of(new HttpResponse({ status: 200, body: this.currentUser }));
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
