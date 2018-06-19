import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';

//import { ToastService } from './toast/toast.service';

@Injectable()
export class ExceptionService {
  //constructor(private toastService: ToastService) { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    return throwError(errorResponse);
  };
}