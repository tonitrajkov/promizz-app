import { Component, OnInit } from '@angular/core';

import { SignUp } from '../shared/signup.model';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
  model: SignUp;
  togglePassword: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.model = new SignUp();
  }

  onSubmit(signUpForm) {
  }
}
