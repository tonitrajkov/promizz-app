import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { FakeBackendInterceptor } from '../_helpers/fake-backend';

// Services
import { AuthService } from './auth.service';
import { ExceptionService } from './exception.service';

// Guards
import { AuthGuard } from './auth.guard';

// Components
import { PublicHeaderComponent } from './public/header/header.component';
import { PublicFooterComponent } from './public/footer/footer.component';
import { SecureHeaderComponent } from './secure/header/header.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule
  ],
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent
  ],
  providers: [
    AuthService,
    ExceptionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    AuthGuard
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent
  ]
})
export class CoreModule {
}