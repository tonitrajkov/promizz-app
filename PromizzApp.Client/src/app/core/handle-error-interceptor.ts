import { Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

export class HandleErrorInterceptor implements HttpInterceptor {

   // constructor(private inj: Injector) { }
    // constructor(private toastr: ToastrService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError(
                    (ex: any, caught: Observable<HttpEvent<any>>) => {
                        if (ex.status === 409) {
                            return this.handleError(ex.error);
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
            // const toastr = this.inj.get(ToastrService);
            // toastr.error(error.Message);
            //  this.toastr.error(error.Message);
        }

        return throwError(errorModel);
    }
}