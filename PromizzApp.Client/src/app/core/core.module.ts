import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreService } from './core.service';
import { PubsubService } from './pupsub.service';
import { fakeBackendProvider } from '../_helpers/fake-backend';

// Components
import { PublicHeaderComponent } from './public/header/header.component';
import { PublicFooterComponent } from './public/footer/footer.component';
import { NavBarComponent } from './secure/navbar/navbar.component';
import { PushNavBarComponent } from './secure/navbar/push-navbar.component';
import { MvpFooterComponent } from './public/footer/mvp-footer.component';
import { MvpHeaderComponent } from './public/header/mvp-header.component';
import { SecureHeaderComponent } from './secure/header/header.component'

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
    NavBarComponent,
    PushNavBarComponent,
    SecureHeaderComponent,

    MvpFooterComponent,
    MvpHeaderComponent
  ],
  providers: [
    fakeBackendProvider,
    CoreService,
    PubsubService
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    NavBarComponent,
    PushNavBarComponent,
    SecureHeaderComponent,

    MvpFooterComponent,
    MvpHeaderComponent
  ]
})
export class CoreModule { }
