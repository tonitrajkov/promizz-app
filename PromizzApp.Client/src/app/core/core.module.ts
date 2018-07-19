import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthorizationHeaderInterceptor } from './authorization-header-interceptor';
import { EnsureAcceptHeaderInterceptor } from './ensure-accept-header-interceptor';
import { FakeBackendInterceptor } from '../_helpers/fake-backend';
import { FeatherIconsPipe } from '../shared/pipes/feather.pipe';

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
    SecureHeaderComponent,
    FeatherIconsPipe
  ],
  providers: [
    AuthService,
    ExceptionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHeaderInterceptor,
      multi: true
    },
  
    AuthGuard
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent,
    FeatherIconsPipe
  ]
})
export class CoreModule { }