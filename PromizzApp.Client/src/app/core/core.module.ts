import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthorizationHeaderInterceptor } from './authorization-header-interceptor';
import { EnsureAcceptHeaderInterceptor } from './ensure-accept-header-interceptor';

import { Localization } from '../shared/globals';

// Pipes
import { FeatherIconsPipe } from '../shared/pipes/feather.pipe';
import { TranslatePipe } from '../shared/pipes/translate.pipe';

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
    RouterModule
  ],
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent,
    NavBarComponent,
    FeatherIconsPipe,
    TranslatePipe
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
    AuthService,
    ExceptionService,
    CoreService,
    AuthGuard
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent,
    NavBarComponent,
    FeatherIconsPipe,
    TranslatePipe
  ]
})
export class CoreModule { }