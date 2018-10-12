import { Inject, forwardRef } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

export class HandleErrorInterceptor implements HttpInterceptor {

    constructor(
        @Inject(forwardRef(() => ToastrService)) private toastr: ToastrService,
        @Inject(forwardRef(() => Router)) private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError(
                    (ex: any, caught: Observable<HttpEvent<any>>) => {
                        if (ex.status === 409) {
                            return this.handleError(ex.error);
                        }

                        if (ex.status === 411) {
                            // not found
                            this.router.navigate(['not-found']);
                        }

                        if (ex.status === 500) {
                            if (ex.error && ex.error.Message && ex.error.Message === 'UNAUTHORIZED') {
                                this.router.navigate(['not-authorized']);
                            }

                            return this.handleError(ex.error);
                        }

                        if (ex.status == 400) {
                            this.toastr.error("BAD_REQUEST");
                        }

                        if (ex.status == 410) {
                            this.toastr.error("NOT_IMPLEMENTED");
                        }

                        throw ex;
                    }
                ),
            );
    }

    handleError(error: any) {
        var errorModel: any = {};
        try {
            var model = JSON.parse(error.Message);
            if (model.hasOwnProperty('Errors')) {

                model.Errors.forEach(function (item: any) {
                    errorModel[item.Key] = item.Message;
                });
            }
        }
        catch {
            this.toastr.error(error.Message);
        }

        return throwError(errorModel);
    }
}