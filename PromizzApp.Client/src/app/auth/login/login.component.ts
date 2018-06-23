import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../../core/auth.service';
import { Credentials } from '../shared/credentials.model';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: Credentials;
  togglePassword: boolean = true;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.model = new Credentials();
    this.authService.logout();

    // get return url from route parameters or default to '/'
    //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(loginForm) {
    if (loginForm.valid) {
      // this.authService.login(this.model)
      //   .pipe(first())
      //   .subscribe(
      //     redirectUrl => {
      //       if (this.authService.isAuthenticated) {
      //         let url = redirectUrl ? [redirectUrl] : ['/promises'];
      //         this.router.navigate(url);
      //         window.location.reload();
      //       }
      //     },
      //     error => {
      //       console.log('Error');
      //       console.log(error);
      //     });
    }
  }
}
