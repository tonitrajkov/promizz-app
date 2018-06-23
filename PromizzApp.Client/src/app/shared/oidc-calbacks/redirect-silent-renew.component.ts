import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  templateUrl: './redirect-silent-renew.component.html'
})

export class RedirectSilentRenewComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.handleSilentCallback();
  }
}