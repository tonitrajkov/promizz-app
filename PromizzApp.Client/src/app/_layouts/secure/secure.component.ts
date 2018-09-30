import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './secure.component.html'
})
export class SecureComponent {



  constructor(private router: Router) {
    this.router.events.subscribe(path => {
      //console.log(path);
    });
  }
}