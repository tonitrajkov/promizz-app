import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Localization, Utils } from '../shared/globals';

import $ from 'jquery';

import { environment } from '../../environments/environment';

@Injectable()
export class CoreService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadLocalizationSync() {
    Utils.syncAjax(`${this.apiUrl}/localization`, null,
      function (result: any) {
        Localization.setLocalization(result);
      }, 'GET');
  }
}