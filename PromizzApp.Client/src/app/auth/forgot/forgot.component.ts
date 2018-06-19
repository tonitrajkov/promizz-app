import { Component } from '@angular/core';

import { AuthService } from '../../core/auth.service';

@Component({
  templateUrl: './forgot.component.html'
})
export class ForgotComponent {
  email: string = '';
  errorMessage: string = 't';

  constructor(private authService: AuthService) { }

  onSubmit(forgotForm) {
    this.errorMessage = '';
    
    // if (forgotForm.valid) {
    //   this.authService.forgotPassword(this.email)
    //     .subscribe(data => {
    //       if (data) {
    //         console.log('Success');
    //         console.log(data);
    //       }
    //     },
    //       error => {
    //         this.errorMessage = error;
    //       })
    // }
  }
}
