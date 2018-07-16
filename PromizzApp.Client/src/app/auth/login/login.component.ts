import { Component, OnInit } from '@angular/core';
import { Credentials } from '../shared/credentials.model';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: Credentials;
  togglePassword: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.model = new Credentials();
  }

  onSubmit(loginForm) {
  }
}
