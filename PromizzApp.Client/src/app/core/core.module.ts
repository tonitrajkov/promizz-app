import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthorizationHeaderInterceptor } from './authorization-header-interceptor';
import { EnsureAcceptHeaderInterceptor } from './ensure-accept-header-interceptor';
import { HandleErrorInterceptor } from './handle-error-interceptor';

import { SharedModule } from '../shared/shared.module';

// Services
import { AuthService } from './auth.service';
import { ExceptionService } from './exception.service';
import { CoreService } from './core.service';

// Guards
import { AuthGuard } from './auth.guard';

// Components
import { PublicHeaderComponent } from './public/header/header.component';
import { PublicFooterComponent } from './public/footer/footer.component';
import { SecureHeaderComponent } from './secure/header/header.component';
import { NavBarComponent } from './secure/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent,
    NavBarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EnsureAcceptHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true
    },
    AuthService,
    ExceptionService,
    CoreService,
    AuthGuard
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent,
    NavBarComponent
  ]
})
export class CoreModule { }