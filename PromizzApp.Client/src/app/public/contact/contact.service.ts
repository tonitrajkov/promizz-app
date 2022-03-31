import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactService {

    private mailChimpEndpoint: string = environment.mailChimpUrl;

    constructor(
        private jsonp: Jsonp
    ) { }

    public mailChimpSubscribe(email: string, planName: string): Observable<any> {
        let params = new HttpParams()
            .set('FNAME', planName)
            .set('EMAIL', email);

        let url = this.mailChimpEndpoint + params.toString() + '&c=JSONP_CALLBACK';

        return this.jsonp.request(url, { method: 'Get' });
    }
}
