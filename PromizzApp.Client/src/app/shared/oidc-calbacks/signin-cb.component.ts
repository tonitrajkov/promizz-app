import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'signin-cb',
  templateUrl: './signin-cb.component.html'
})
export class SigninCbComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.userLoaded$.subscribe((userLoaded) => {
      if (userLoaded) {
        this.router.navigate(['./']);
      }
      else {
        if (!environment.production) {
          console.log("An error happened: user wasn't loaded.");
        }
      }
    });

    this.authService.handleCallback();
  }

}
