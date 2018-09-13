import { Component, OnInit } from '@angular/core';

import { CoreService } from './core/core.service';

@Component({
  selector: 'promise-app',
  templateUrl: './promise-app.component.html'
})
export class PromiseAppComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.loadLocalizationSync();
  }
}
