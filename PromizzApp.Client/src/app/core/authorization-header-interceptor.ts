import { Injectable } from "@angular/core";
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent }
    from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        // add the access token as bearer token
        request = request.clone(
            {
                setHeaders: {
                    Authorization: this.authService.getUserAccessType()
                        + " " + this.authService.getUserAccessToken()
                }
            });
        return next.handle(request);
    }
}