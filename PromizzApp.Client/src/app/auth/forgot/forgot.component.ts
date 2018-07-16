import { Component } from '@angular/core';

@Component({
  templateUrl: './forgot.component.html'
})
export class ForgotComponent {
  email: string = '';
  errorMessage: string = '';

  constructor() { }

  onSubmit(forgotForm) {
  }
}
