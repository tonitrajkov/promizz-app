import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignUp } from '../shared/signup.model';
import { AuthService } from '../../core/auth.service';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
  model: SignUp;
  togglePassword: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.model = new SignUp();
  }

  onSubmit(signUpForm) {
    // if (signUpForm.valid) {
    //   this.authService.signUp(this.model)
    //     .subscribe(data => {
    //       if (data) {
    //         console.log('Success');
    //         console.log(data);
    //       }
    //     },
    //       error => {
    //         console.log('Error');
    //         console.log(error);
    //       });
    // }
  }
}
