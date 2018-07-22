import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    CanActivate,
    CanLoad,
    Router,
    Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // if (!this.authService.isAuthenticated()) {
        //     this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
        //     return false;
        // }

        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            // trigger signin
            this.authService.triggerSignIn();
            return false;
        }
    }
}